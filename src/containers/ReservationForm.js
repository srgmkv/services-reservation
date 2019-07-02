import React from 'react';
import { connect } from 'react-redux';
import { toggleAppForm, sendDateTime, reserveService, updateCalendar, toggleModal } from '../state-controls/actions';
import dfs from './dfs';
import Modal from '../components/Modal';
import FormComponent from '../components/FormComponent';
import '../ReservationForm.css'

//  ФОРМА ЗАПИСИ НА УСЛУГУ
const mapStateToProps = state => { //состояние из стора для текущего компонента
  return {
    reservedServices: state.reservedServices,
    calendar: state.calendar,
    dataToResForm: state.dataToResForm,
    selectedDateTime: state.selectedDateTime,
    servicesList: state.servicesList,
    isModalShown: state.isModalShown
  }
};

function mapDispatchToProps(dispatch) { //функции, которые будут передавать значения в редьюсеры
  return {
    toggleAppForm: () => dispatch(toggleAppForm()),
    sendDateTime: (value) => dispatch(sendDateTime(value)),
    reserveService: (value) => dispatch(reserveService(value)),
    updateCalendar: (value) => dispatch(updateCalendar(value)),
    toggleModal: () => dispatch(toggleModal())
  };
}

//САМ КОМПОНЕНТ:
const ReservationForm = (props) => {
  //из стейта возьмем значения:
  const { serviceId, company, serviceType } = props.dataToResForm;
  const { date, time } = props.selectedDateTime;
  const id = props.reservedServices.length

  //обработчик селектов: добавляем выбранную дату и время в состояние
  const handleSelect = e => {
    const { value, id } = e.target;
    props.sendDateTime({                // передаем в редъюсер выбранную дату/время
      ...props.selectedDateTime, [id]: value
    });
  };

  //резервируем услугу
  const reserveTime = () => {
    const data = {
      date, time, serviceId, serviceType, company, id
    }

    if (date && time) { // валидация на заполненность всех полей (дата и время)
      props.reserveService(data); // обновляем список забронированных услуг
      props.updateCalendar(dfs(props.calendar, data)); // обновляем данные в календаре доступных услуг
      props.toggleModal(); // загружаем модальное окно
    }
  };

  //извлекаем данные для списка дат по выбранной услуг, фильтруем календарь
  const serviceAvaliabiltyData = props.calendar.filter(el => el.id === serviceId)[0].dates
  const arrayOfDatesToJSX = serviceAvaliabiltyData.map((el, index) => (
    <option key={index}>{el.date}</option>
  ))

  //извлекаем данные для списка со временем записи
  const timesToSelect = serviceAvaliabiltyData.filter(el => el.date === date)[0]
  let arrayOfTimesToJSX;
  if (props.selectedDateTime.date) {// проверяем, чтобы список дат был загружен
    arrayOfTimesToJSX = timesToSelect.times.filter(el => !el.isBlocked)
      .map((el, index) => (
        <option key={index}>{el.value}</option>
      ))
  }

  return (
    <>
      {props.isModalShown && <Modal />}

      <FormComponent
        cancelClick={props.toggleAppForm}
        reserveClick={reserveTime}
        displayStyle={props.isModalShown}
        handleSelect={handleSelect}
        dates={arrayOfDatesToJSX}
        times={arrayOfTimesToJSX}
        disabledTimeSelect={!props.selectedDateTime.date}
      />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
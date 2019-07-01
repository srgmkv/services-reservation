import React from 'react';
import { connect } from 'react-redux';
import { toggleAppForm, sendDateTime, reserveService, updateCalendar, toggleModal } from '../state-controls/actions';
import dfs from './dfs';
import Modal from './Modal';



const mapStateToProps = state => {
  return {
    reservedServices: state.reservedServices,
    calendar: state.calendar,
    isReservationFormShown: state.isReservationFormShown,
    dataToResForm: state.dataToResForm,
    selectedDateTime: state.selectedDateTime,
    servicesList: state.servicesList,
    isModalShown: state.isModalShown
  }
};

function mapDispatchToProps(dispatch) {
  return {
    toggleAppForm: () => dispatch(toggleAppForm()),
    sendDateTime: (value) => dispatch(sendDateTime(value)),
    reserveService: (value) => dispatch(reserveService(value)),
    updateCalendar: (value) => dispatch(updateCalendar(value)),
    toggleModal: () => dispatch(toggleModal())
  };
}

function ReservationForm(props) {
  const { serviceId, company, serviceType } = props.dataToResForm;
  const { date, time } = props.selectedDateTime;
  const id = props.reservedServices.length

  //обработчик селектов: добавляем выбранную дату и время в состояние
  const handleSelect = e => {
    const { value, id } = e.target;
    const objCreator = (property) => (
      {
        ...props.selectedDateTime, [property]: value
      }
    );
    props.sendDateTime(objCreator(id));
  };

  //резервируем услугу
  const reserveTime = () => {

    const data = {
      date, time, serviceId, serviceType, company, id
    }

  if (date && time) {
    props.reserveService(data);
    //props.toggleAppForm();
    props.updateCalendar(dfs(props.calendar, data));
    props.toggleModal();
  }
};

//конструируем выпадающий список дат по выбранной услуге
const serviceResevingData = props.calendar.filter(el => el.id === serviceId)[0].dates
const arrayOfDatesToJSX = serviceResevingData.map((el, index) => (
  <option key={index}>{el.date}</option>
))

//конструируем выпадающий список со временем записи
const timesToSelect = serviceResevingData.filter(el => el.date === date)[0]
let arrayOfTimesToJSX;
if (props.selectedDateTime.date) {
  arrayOfTimesToJSX = timesToSelect.times.filter(el => !el.isBlocked)
    .map((el, index) => (
      <option key={index}>{el.value}</option>
    ))
}

return (
  <div className="reservation-form">

    <button id="cancel" onClick={props.toggleAppForm}>Cancel</button>

    <select className="date-select" id="date" onChange={handleSelect} >
      <option value={''}>choose date</option>
      {arrayOfDatesToJSX}
    </select>

    <select className="time-select" id="time"
      disabled={!props.selectedDateTime.date} onChange={handleSelect}
    >
      <option value={''}>choose time</option>
      {arrayOfTimesToJSX}
    </select>

    <button id="reserve" onClick={reserveTime}>Reserve</button>
    {props.isModalShown && <Modal />}
  </div>
)

}


export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

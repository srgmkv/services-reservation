import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, toggleAppForm } from '../state-controls/actions';
import '../ Styles/Modal.css'

const mapStateToProps = state => {
  return {
    reservedServices: state.reservedServices,
  }
};
//Компонент отображения модального окна, содержит совсем немного логики
const Modal = (props) => {
  //обработчик закрывает модальное окно и форму бронирования
  const closeForm = () => {
    props.toggleAppForm();
    props.toggleModal();
  }

  //берем из списка резервированных услуг последнюю и передаем эти данные в 
  //модальное окно-уведомление
  const reservedServiceData = props.reservedServices.filter((el, ind, arr) => el.id === arr.length - 1)[0]
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">You have successfully ordered the next service:</div>
        <div className="info">
          <div>{reservedServiceData.serviceType.toUpperCase()} in {reservedServiceData.company}</div>
          <div>on <span>
              {reservedServiceData.date.replace(/-/gi, '.')}
            
            </span> at <span>{reservedServiceData.time}</span>
          </div>
        </div>

        <button onClick={closeForm}>close</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { toggleModal, toggleAppForm })(Modal);
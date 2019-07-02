import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, toggleAppForm } from '../state-controls/actions';
import '../ Styles/Modal.css'

const mapStateToProps = state => {
  return {
    reservedServices: state.reservedServices,
  }
};

const Modal = (props) => {
  //обработчик закрывает модальное окно и форму бронирования
  const closeForm = () => {
    props.toggleAppForm();
    props.toggleModal();
  }
  
  //берем из списка резервированных услуг последнюю
  const reservedServiceData = props.reservedServices.filter((el, ind, arr) => el.id === arr.length - 1)[0]
  return (
    <div className="modal">
      <div className="container">
        {reservedServiceData.serviceType}
        {reservedServiceData.date}
        {reservedServiceData.time}
        <button onClick={closeForm}>close</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { toggleModal, toggleAppForm })(Modal);
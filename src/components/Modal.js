import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, toggleAppForm } from '../state-controls/actions';
import '../Modal.css'

const mapStateToProps = state => {
  return {
    reservedServices: state.reservedServices,
  }
};

const Modal = (props) => {
  const closeForm = () => {
    props.toggleAppForm();
    props.toggleModal();
  }
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
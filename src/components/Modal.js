import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, toggleAppForm } from '../state-controls/actions';

const mapStateToProps = state => {
  return {
    reservedServices: state.reservedServices,
  }
};



const Modal = (props) => {
  console.log('props.reservedServices', props.reservedServices)
  const closeForm = () => {
    props.toggleAppForm();
    props.toggleModal();
  }
  const reservedServiceData = props.reservedServices.filter((el, ind, arr) => el.id === arr.length - 1)[0]
  return (
    <div>
      {reservedServiceData.serviceType} 
      {reservedServiceData.date} 
      {reservedServiceData.time}
      <button onClick={closeForm}>close</button>
    </div>
  )
}

export default connect(mapStateToProps, { toggleModal, toggleAppForm })(Modal);
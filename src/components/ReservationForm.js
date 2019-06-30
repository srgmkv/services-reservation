import React from 'react';
import { connect } from 'react-redux';
import { toggleAppForm } from '../state-controls/actions';

const mapStateToProps = state => {
  return {
    calendar: state.calendar,
    isReservationFormShown: state.isReservationFormShown,
    idToReservForm: state.idToReservForm
  }
};

function mapDispatchToProps(dispatch) {
  return {
    toggleAppForm: () => dispatch(toggleAppForm())
  };
}

function ReservationForm(props) {
  const hideReservationForm = () => props.toggleAppForm();

  const id = props.idToReservForm;
  const service = props.calendar.filter(el => el.id === id)[0]
  const dates = service.dates.map((el, index) => (
    <option key={index}>{el.date}</option>
  ))
  




  return (
    <div className="reservation-form">
      <button id="cancel" onClick={hideReservationForm}>Cancel</button>
      <select className="date-select" id="date-select" >
        <option value={''}>choose date</option>

        {dates}

      </select>

      <select className="time-select" id="time-select" >
        <option value={''}>choose time</option>

        

      </select>


    </div>
  )

}


export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

import React from 'react';
import { connect } from 'react-redux';
import { toggleAppForm, sendDateTime } from '../state-controls/actions';


const mapStateToProps = state => {
  return {
    calendar: state.calendar,
    isReservationFormShown: state.isReservationFormShown,
    idToReservForm: state.idToReservForm,
    selectedDateTime: state.selectedDateTime
  }
};

function mapDispatchToProps(dispatch) {
  return {
    toggleAppForm: () => dispatch(toggleAppForm()),
    sendDateTime: (value) => dispatch(sendDateTime(value))
  };
}

function ReservationForm(props) {

  const hideReservationForm = () => props.toggleAppForm();

  const handleSelect = e => {
    const { value, id } = e.target;

    const objCreator = (property) => (
      {
        ...props.selectedDateTime,
        [property]: value
      }
    );
    props.sendDateTime(objCreator(id));
  }

  const id = props.idToReservForm;

  const service = props.calendar.filter(el => el.id === id)[0];
  const dates = service.dates.map((el, index) => (
    <option key={index}>{el.date}</option>
  ))

  const { date } = props.selectedDateTime;
  const timesToSelect = service.dates.filter(el => el.date === date)[0]
  let times;
  if (props.selectedDateTime.date) {
    times = timesToSelect.times.filter(el => el.isBlocked)
      .map((el, index) => (
        <option key={index}>{el.value}</option>
      ))
  }


  return (
    <div className="reservation-form">
      <button id="cancel" onClick={hideReservationForm}>Cancel</button>

      <select className="date-select" id="date" onChange={handleSelect} >
        <option value={''}>choose date</option>
        {dates}
      </select>

      <select className="time-select" id="time"
        disabled={!props.selectedDateTime.date}
        onChange={handleSelect}
      >
        <option value={''}>choose time</option>
        {times}
      </select>


    </div>
  )

}


export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

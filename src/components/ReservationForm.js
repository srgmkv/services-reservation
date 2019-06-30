import React from 'react';
import { connect } from 'react-redux';
import { toggleAppForm } from '../state-controls/actions';

const mapStateToProps = state => {
  return {
    isReservationFormShown: state.isReservationFormShown
  }
};

function mapDispatchToProps(dispatch) {
  return {
    toggleAppForm: () => dispatch(toggleAppForm())
  };
}



function ReservationForm(props) {
  const hideReservationForm = () => props.toggleAppForm();

  return (
    <>
      <button onClick={hideReservationForm}>CLCIK</button>
    </>
  )

}


export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

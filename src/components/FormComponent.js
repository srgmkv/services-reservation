import React from 'react';
import Select from './Select';

const FormComponent = ({
  cancelClick, reserveClick, displayStyle, handleSelect, dates, times, disabledTimeSelect }) => {

  return (
    <>
      <div className="reservation-form" style={displayStyle ? { 'display': 'none' } : null}>
        <div className="form-container">
          <div className="form-header">Please, choose time to reserve </div>
          <div className="selects-container">

            <Select name="date" onChange={handleSelect}
              header={'choose date'} items={[]}>
              {dates}
            </Select>

            <Select name="time" onChange={handleSelect}
              header={'choose time'} items={[]} disabled={disabledTimeSelect}>
              {times}
            </Select>
          </div>
          <div className="buttons">
            <button id="cancel" onClick={cancelClick}>Cancel</button>
            <button id="reserve" onClick={reserveClick}>Reserve</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default FormComponent;

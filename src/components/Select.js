import React from 'react';

const Select = ({ items, name, onChange, header, disabled, children }) => {
  return (
    <select id={name} onChange={onChange} disabled={disabled}>
      <option value={''}>{header}</option>
      {
        items.map((el, index) => <option key={index}>{el}</option>)
      }
      {children}
    </select>
  )
}

export default Select;
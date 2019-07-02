import React from 'react';

const ListOfServices = ({ items, onClick }) => {
  return (
    <div className="services-block">
      {items.map((el, index) => (

        <div className={`service-item ${el.type.replace(' ', '')}`}
          key={index}
          onClick={() => onClick(el)}>
          <p>{el.type}</p>
          <p>{el.price} &#x20bd;</p>
          <p>{el.company.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ListOfServices;
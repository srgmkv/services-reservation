import React from 'react';

//Компонент представления карточек с загруженными услугами
const ListOfServices = ({ items, onClick }) => {
  return (
    <div className="services-block">
      {items.map((el, index) => (

        <div className={`service-item ${el.type.replace(' ', '')}`}
          key={index}
          onClick={() => onClick(el)}>
          <div className="type"><div>{el.type}</div></div>
          <div className="price"><div>{el.price} &#x20bd;</div></div>
          <div className="company">{el.company.name}</div>
        </div>
      ))}
    </div>
  )
}

export default ListOfServices;
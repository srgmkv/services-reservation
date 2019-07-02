import React from 'react';
import ServicesBlock from '../containers/ServicesBlock';
import List from '../containers/ListOfReserved';

const MainForm = () => {
  return (
    <div className="App">
      <List />
      <ServicesBlock />
    </div>
  )

}

export default MainForm;
import React from 'react';
import ServicesBlock from './ServicesBlock';
import List from './List';

const MainForm = (props) => {
  return (
    <div className="App">
      <List />
      <ServicesBlock />
    </div>
  )

}

export default MainForm;
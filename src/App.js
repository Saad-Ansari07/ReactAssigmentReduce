import React, { useState, useReducer } from 'react';
import './App.css';
import Parent from './parent'
import ValueContext from './ValueContext'

function App() {
  // let [number, setNumber] = useState(46);
  let value = useState(68);
  let number = useReducer();
  return (
    <ValueContext.Provider value={value}>
      <div>
      Here we will make a data tree
      <Parent></Parent>

    </div>
    </ValueContext.Provider>
    
  );
}

export default App;

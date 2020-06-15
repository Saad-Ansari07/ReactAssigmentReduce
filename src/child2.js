import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer';


function Child2() {
    let [state, dispatch] = useReducer(numberReducer,52);
    return  (
          <div>
              child {state}
              <button onClick={ ()=> {dispatch({type: 'INCREMENT'});}}>Increment</button>
              <button onClick={ ()=> {dispatch({type: 'DECREMENT'});}} >Decrement</button>
          </div>
    );
}

export default Child2;
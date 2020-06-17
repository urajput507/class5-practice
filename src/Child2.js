import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] =  useReducer(CounterReducer, 0);

    return(
        <div className="child2">
            <h2>Counter Reducer</h2>

            <h3>Value of reducer state is: {state}</h3>
            <button onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>
        </div>
    )
}

export default Child2;
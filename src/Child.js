import React, { useContext } from 'react';
import CounterContext from './CounterContext';


const Child = () => {

    let CounterValue = useContext(CounterContext)
console.log(CounterValue)
    return(

        <div className="child1">
            <h3>Assignment 5</h3>
<h2>Counter Context</h2>
    <h2> Counter Value is : {CounterValue[0]}</h2>
<button onClick={()=> {CounterValue[1](++CounterValue[0])}}> Increase Counter</button>

</div>


)
}

export default Child;
import React, { useContext } from 'react';
import CounterContext from './CounterContext';


const Child = () => {

    let CounterValue = useContext(CounterContext)
console.log(CounterValue)
    return(
        <div>
<h3>HEllo</h3>

    <h2> Counter Value is : {CounterValue[0]}</h2>
<button onClick={()=> {CounterValue[1](++CounterValue[0])}}> Increase Counter</button>

</div>

)
}

export default Child;
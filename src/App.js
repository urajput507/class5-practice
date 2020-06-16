import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {

let countState = useState(0)



  return (
    
    <CounterContext.Provider value={countState}>
    <div>
  <Parent />
    </div>
    </CounterContext.Provider>


  );
}

export default App;

import { useState } from 'react'
import './App.css'
import {useCounter} from "./hooks/useCounter"


function App() {
  const {count,increment,decrement,reset } = useCounter()
  return(
    <div>
      <h1>{count}</h1>



    <button onClick={increment}>+1</button>
    
    <button onClick={decrement}>-1</button>
    
    <button onClick={reset}>reset</button>
    </div>
  );
}

export default App

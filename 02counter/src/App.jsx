import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  //let counter = 15;

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  }

  const addSecondValue = () => {
    setCounter((prevCounter) => prevCounter + 2);
  }

  const addThirdValue = () => {
    setCounter((prevCounter) => prevCounter + 5);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  const resetValue = () => {
    setCounter((prevCounter) => prevCounter = 0)
    alert("Reset Complete!");
  }

  return (
    <>
      <h1>People Counter</h1>
      <h2>Counter value: {counter}</h2> 
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button onClick={addSecondValue}>Add +2</button> {" "}
      <button onClick={addThirdValue}>Add +5</button> {" "}
      <button
      onClick={removeValue}
      >Remove 1 Value</button>{" "}
      <button onClick={resetValue}>Reset</button>
    </>
  )
}

export default App

import React from 'react'
import UseCounter from '../UseCounter'

const CounterComponent = () => {
    const {increment,decrement,count,reset} = UseCounter(0)
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterComponent

import React, { useState } from 'react'

const UseState = () => { 
    const [count,setCount] = useState(0)// useState always updated the value of the variable
  return (// useState allways helps when you whant to updated a value of anything 
    <>
    <h1>The count is {count}</h1>
    <button onClick={()=>{setCount(count + 1)}}>Increment</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
    </>
  )
}

export default UseState
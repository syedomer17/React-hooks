import React from 'react'
import useLocalStorage from './CostumHooks.jsx/useLocalStorage'

const UseLocalStorage = () => {
    const [name,setName] = useLocalStorage("name","omer");
  return (
    <div>
      <h1>welcome, {name}</h1>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    </div>
  )
}

export default UseLocalStorage

import React, { useState } from 'react'

const UseCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return{increment,decrement,reset,count};
}

export default UseCounter

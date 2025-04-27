import React, { useState } from 'react'

const useLocalStorage = (key,initialValue) => {
    const storedValue = localStorage.getItem(key);
    const [value,setValue] = useState(storedValue ? JSON.parse(storedValue): initialValue);

    const setStorageValue = (newValue) =>{
        setValue(newValue);
        localStorage.setItem(key,JSON.stringify(newValue));
    };
    return [value,setStorageValue];
}

export default useLocalStorage

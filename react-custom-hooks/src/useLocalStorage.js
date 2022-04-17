import { useState, useEffect } from 'react';

// create a function for persisting our data, and retrieving our data from local storage 
function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))

    if (savedValue) return savedValue

    // check if the inititial value is a funciton, using instanceof 
    if(initialValue instanceof Function) return initialValue()

    return initialValue
}

export default function useLocalStorage(initialValue){
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}



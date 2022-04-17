import { useEffect } from 'react';

// Whenever a variable changes, we want to log that to the console
export default function useUpdateLogger(value){
    useEffect(() => {
        console.log(value)
    }, [value])
}

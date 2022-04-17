import { useState } from 'react';

const useRandomColor = () => {
const [color, setColor] = useState("")

const changeColor = () => {
    setColor(Math.random().toString(16).substr(-6))
}

return { color, changecolor }

}

export default useRandomColor
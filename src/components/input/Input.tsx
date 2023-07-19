import { IInputProps } from "../../types/props"

import s from './input.module.css'

const Input = ({value, handleInput, addTodo}: IInputProps) => {
    
    const handleKeyDown = (e: any) => {
        if(e.key !== 'Enter') return
        addTodo()
    } 
    
    return (
        <>
            <input 
            className={s.input}
            value={value} 
            onKeyDown={handleKeyDown}
            onChange={(e) => handleInput(e)}/>
        </>
    )
}

export default Input
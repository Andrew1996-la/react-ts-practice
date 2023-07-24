import { IInputProps } from "../../types/props"

import s from './input.module.css'

const Input = ({value, handleInput, addTodo}: IInputProps) => {
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return
        addTodo()
    } 
    
    return (
        <>
            <input 
                placeholder="Добавить новую задачу"
                className={s.input}
                value={value} 
                onKeyDown={handleKeyDown}
                onChange={(e) => handleInput(e)}/>
        </>
    )
}

export default Input
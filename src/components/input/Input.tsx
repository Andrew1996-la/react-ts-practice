import { IInputProps } from "../../types/props"

import s from './input.module.css'

const Input = ({value, handleInput}: IInputProps) => {
    return (
        <>
            <input className={s.input} value={value} onChange={(e) => handleInput(e)}/>
        </>
    )
}

export default Input
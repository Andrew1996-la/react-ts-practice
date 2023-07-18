import { IButtonProps } from "../../types/props"

import s from './button.module.css'

const Button = ({text, addTodo}: IButtonProps) => {
  return (
    <button className={s.addButton} onClick={addTodo}>{text}</button>
  )
}

export default Button
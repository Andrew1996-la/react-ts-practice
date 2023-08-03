import { IButtonProps } from "../../types/props"

import s from './button.module.css'

const Button = ({addTodo, children}: IButtonProps) => {
  return (
    <button className={s.addButton} onClick={addTodo}>{children}</button>
  )
}

export default Button
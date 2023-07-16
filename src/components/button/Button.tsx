import { IButtonProps } from "../../types/props"

const Button = ({text, addTodo}: IButtonProps) => {
  return (
    <button onClick={addTodo}>{text}</button>
  )
}

export default Button
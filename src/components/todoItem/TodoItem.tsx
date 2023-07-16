import { ITodoItemProps } from "../../types/props"

const TodoItem = ({title, completed}: ITodoItemProps) => {
  return (
    <li>
        <input type="checkbox"/>
        <span>{title}</span>
        <span>x</span>
    </li>
  )
}

export default TodoItem
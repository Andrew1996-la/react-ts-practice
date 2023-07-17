import { ITodoItemProps } from "../../types/props"

const TodoItem = ({id, title, completed, markTodo}: ITodoItemProps) => {
  return (
    <li>
        <input type="checkbox" checked={completed} onChange={() => markTodo(id)}/>
        <span>{title}</span>
        {/* <span>x</span> */}
    </li>
  )
}

export default TodoItem
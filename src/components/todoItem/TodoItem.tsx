import { ITodoItemProps } from "../../types/props"

import s from './todoItem.module.css';
import close from '../../img/close.png';

const TodoItem = ({id, title, completed, markTodo}: ITodoItemProps) => {
  return (
    <li className={s.listItem}>
        <input className={s.checkbox} type="checkbox" checked={completed} onChange={() => markTodo(id)}/>
        <span className={s.text}>{title}</span>
        <img src={close} alt="close" />
    </li>
  )
}

export default TodoItem
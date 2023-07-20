import { ITodoItemProps } from "../../types/props"
import InputEditMode from "../input/InputEditMode";

import s from './todoItem.module.css';
import close from '../../img/close.png';

const TodoItem = ({id, title, completed, markTodo,editMode, deleteTodo, renameTodo, toggleEditMode}: ITodoItemProps) => {  
  

  return (
    <li className={s.listItem}>
        <input 
          className={s.checkbox} 
          type="checkbox" 
          checked={completed}
          onChange={() => markTodo(id)}/>
        <span className={s.text} onDoubleClick={() => toggleEditMode(id)}>
          {
            editMode ? 
              <InputEditMode  renameTodo={renameTodo} text={title} id={id}/> :
              title
          }
        </span>
        <img src={close} alt="close" onClick={() => deleteTodo(id)}/>
    </li>
  )
}

export default TodoItem
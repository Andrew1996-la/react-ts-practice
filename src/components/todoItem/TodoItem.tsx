import { ITodoItemProps } from "../../types/props"
import InputEditMode from "../input/InputEditMode";

import s from './todoItem.module.css';
import close from '../../img/close.png';
import { useAppDispatch } from "../../hooks";
import { deleteTodo, markTodo, toggleEditMode } from "../../store/todoSlise";

const TodoItem = ({id, title, completed,editMode}: ITodoItemProps) => {  

  const dispatch = useAppDispatch();

  return (
    <li className={s.listItem}>
        <input 
          className={s.checkbox} 
          type="checkbox" 
          checked={completed}
          onChange={() => dispatch(markTodo(id))}/>

        <span className={completed ? s.textCompleted : s.text} onDoubleClick={() => dispatch(toggleEditMode(id))}>
          
          {
            editMode ? 
              <InputEditMode
                text={title} 
                id={id}/> :
              title
          }
        </span>
        <img src={close} alt="close" onClick={() => dispatch(deleteTodo(id))}/>
    </li>
  )
}

export default TodoItem
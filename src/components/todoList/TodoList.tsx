import { ITodoListProps } from "../../types/props"
import TodoItem from "../todoItem/TodoItem"

import s from './todoList.module.css';

const TodoList = ({todos}: ITodoListProps) => {

    const todosElements = todos.map(todo => (
        <TodoItem 
            key={todo.id} 
            id={todo.id}
            title={todo.title} 
            completed={todo.completed}
            editMode = {todo.editMode}/>
    ))
  
    return (
        <ul className={s.list}>
            {todosElements}
        </ul>
    )
}

export default TodoList
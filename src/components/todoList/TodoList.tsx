import { useAppSelector } from "../../hooks";
import TodoItem from "../todoItem/TodoItem"

import s from './todoList.module.css';

const TodoList = () => {

    const todos = useAppSelector(state => state.todo.todos)

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
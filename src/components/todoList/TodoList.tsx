import { ITodoListProps } from "../../types/props"
import TodoItem from "../todoItem/TodoItem"

import s from './todoList.module.css';

const TodoList = ({todos, markTodo, deleteTodo}: ITodoListProps) => {

    const todosElements = todos.map(todo => (
        <TodoItem 
            key={todo.id} 
            id={todo.id}
            title={todo.title} 
            completed={todo.completed}
            markTodo={markTodo}
            deleteTodo={deleteTodo}/>
    ))
  
    return (
        <ul className={s.list}>
            {todosElements}
        </ul>
    )
}

export default TodoList
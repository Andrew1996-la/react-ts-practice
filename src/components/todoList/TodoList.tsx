import { ITodoListProps } from "../../types/props"
import TodoItem from "../todoItem/TodoItem"

const TodoList = ({todos}: ITodoListProps) => {
    
    const todosElements = todos.map(todo => (
        <TodoItem 
            key={todo.id} 
            title={todo.title} 
            completed={todo.completed}/>
    ))
  
    return (
        <ul>
            {todosElements}
        </ul>
    )
}

export default TodoList
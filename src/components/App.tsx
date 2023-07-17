import {useState} from 'react'

import { ITodo } from '../types/data'
import { uniqueId } from '../utils'

import Input from './input/Input'
import Button from './button/Button'
import TodoList from './todoList/TodoList'

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const addTodo = (): void => {
        if(!inputValue) return;

        setTodos([...todos, {
            id: uniqueId(),
            title: inputValue,
            completed: false,
        }])

        setInputValue('');
    }

    const markTodo = (id: number): void => {
        setTodos((prevState: ITodo[]) =>
            prevState.map((todo: ITodo) => (
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ))
        )
    }

    return (
        <div>
            <Input value={inputValue} handleInput={handleInput}/>
            <Button text='Добавить' addTodo={addTodo}/>
            <TodoList todos={todos} markTodo={markTodo}/>
        </div>
    )
}

export default App
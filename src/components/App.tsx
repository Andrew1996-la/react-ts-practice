import {useState} from 'react'

import { ITodo } from '../types/data'
import { uniqueId } from '../utils'

import Input from './input/Input'
import Button from './button/Button'
import TodoList from './todoList/TodoList'

import s from './app.module.css';

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

    const deleteTodo = (id: number) => {
        setTodos((prevState: ITodo[]) => 
            prevState.filter((todo: ITodo) => todo.id !== id )
        )
    }

    return (
        <div className={s.appContainer}>
            <div className={s.controlPanel}>
                <Input value={inputValue} handleInput={handleInput} addTodo={addTodo}/>
                <Button text='Добавить' addTodo={addTodo}/>
            </div>
            <TodoList 
                todos={todos} 
                markTodo={markTodo}
                deleteTodo={deleteTodo}/>
        </div>
    )
}

export default App
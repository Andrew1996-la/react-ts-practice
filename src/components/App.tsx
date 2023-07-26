import {useState, useEffect} from 'react'

import { localStorageGetTodo, localStorageSetTodo } from '../localstorage'

import { ITodo } from '../types/data'
import { uniqueId } from '../utils'

import Input from './input/Input'
import Button from './button/Button'
import TodoList from './todoList/TodoList'

import s from './app.module.css';

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>(localStorageGetTodo('todos') || []);
    const [inputValue, setInputValue] = useState<string>('')
    
    useEffect(() => {
        localStorageSetTodo('todos', todos)
    }, [todos])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    const addTodo = (): void => {
        if(!inputValue) return;

        setTodos([...todos, {
            id: uniqueId(),
            title: inputValue,
            completed: false,
            editMode: false,
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

    const deleteTodo = (id: number): void => {
        setTodos((prevState: ITodo[]) => 
            prevState.filter((todo: ITodo) => todo.id !== id )
        )
    }

    const toggleEditMode = (id: number): void => {
        setTodos((prevState: ITodo[]) =>
        prevState.map((todo: ITodo) => (
            todo.id === id ? {...todo, editMode: !todo.editMode} : todo
        )))
    }

    const renameTodo = (id: number, text: string): void => {
        setTodos((prevState: ITodo[]) => 
            prevState.map((todo: ITodo) => (
                todo.id === id ? {...todo, title: text} : todo
            ))
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
                deleteTodo={deleteTodo}
                toggleEditMode={toggleEditMode}
                renameTodo={renameTodo}/>
        </div>
    )
}

export default App
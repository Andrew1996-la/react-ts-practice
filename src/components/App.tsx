import {useState, useEffect} from 'react'

import { localStorageGetTodo, localStorageSetTodo } from '../localstorage'

import { ITodo } from '../types/data'
import { uniqueId } from '../utils'

import { useAppDispatch, useAppSelector } from '../hooks'

import { addTask, deleteTodo } from '../store/todoSlise'

import Input from './input/Input'
import Button from './button/Button'
import TodoList from './todoList/TodoList'

import s from './app.module.css';

const App: React.FC = () => {

    // const [todos, setTodos] = useState<ITodo[]>(localStorageGetTodo('todos') || []);
    
    const [inputValue, setInputValue] = useState<string>('');
    const todos = useAppSelector(state => state.todo.todos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        localStorageSetTodo('todos', todos);
    }, [todos])

    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setInputValue(e.target.value)
    }
    
    const addTodo = (): void => {
        dispatch(addTask(inputValue));
        setInputValue('');
    }

    // const renameTodo = (id: number, text: string): void => {
        // setTodos((prevState: ITodo[]) => 
        //     prevState.map((todo: ITodo) => (
        //         todo.id === id ? {...todo, title: text} : todo
        //     ))
        // )        
    // }

    return (
        <div className={s.appContainer}>
            <div className={s.controlPanel}>
                <Input value={inputValue} handleInput={handleInput} addTodo={addTodo}/>
                <Button text='Добавить' addTodo={addTodo}/>
            </div>
            <TodoList 
                todos={todos} 
                // toggleEditMode={toggleEditMode}
                // renameTodo={renameTodo}
                />
        </div>
    )
}

export default App
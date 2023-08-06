import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

import { localStorageSetTodo } from '../localstorage'
import { addTask } from '../store/todoSlise'

import Input from './input/Input'
import { ButtonStandart } from '../ui/buttons/Button'
import TodoList from './todoList/TodoList'
import ControlPanel from './controlPanel/ControlPanel'
import LoginForm from './loginForm/LoginForm'

import s from './app.module.css';

const App: React.FC = () => {
    
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

    return (
        <div className={s.appContainer}>
            <LoginForm />
            {/* <ControlPanel>
                <Input value={inputValue} handleInput={handleInput} addTodo={addTodo}/>
                <ButtonStandart addTodo={addTodo}>Добавить</ButtonStandart>
            </ControlPanel>
            <TodoList/> */}
        </div>
    )
}

export default App
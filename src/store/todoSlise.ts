import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {localStorageGetTodo} from '../localstorage'
import { ITodo } from '../types/data';
import { uniqueId } from '../utils';

export interface IInitState {
    todos: ITodo[]
}

const initialState: IInitState = {
    todos: localStorageGetTodo('todos') || []
}; 

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
           const newTask = {
            id: uniqueId(),
            title: action.payload,
            completed: false,
            editMode: false,
           }
            state.todos.push(newTask);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo: ITodo) => todo.id !== action.payload )
        },
        markTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map((todo: ITodo) => (
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            ))
        },
        toggleEditMode: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map((todo: ITodo) => (
                todo.id === action.payload ? {...todo, editMode: !todo.editMode} : todo
            ))
        },
        renameTodo: (state, action:PayloadAction<{id: number, newTile:string}>) => {
            state.todos = state.todos.map((todo: ITodo) => (
                todo.id === action.payload.id ? {...todo, title: action.payload.newTile } : todo
            ))
        },
    }
})

export const {addTask, markTodo, deleteTodo, toggleEditMode, renameTodo} = todoSlice.actions
export default todoSlice.reducer
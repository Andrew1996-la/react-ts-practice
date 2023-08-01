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
        markTodo: (state, action) => {},
        deleteTodo: (state, action) => {},
        toggleEditMode: (state, action) => {},
        renameTodo: (state, action) => {},
    }
})

export const {addTask, markTodo, deleteTodo, toggleEditMode, renameTodo} = todoSlice.actions
export default todoSlice.reducer
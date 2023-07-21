import React from "react"
import { ITodo } from "./data"

export interface IButtonProps {
    text: string,
    addTodo: () => void,
}

export interface IInputProps {
    value: string,
    addTodo: () => void
    handleInput: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export interface ITodoListProps {
    todos: ITodo[]
    toggleEditMode: (id: number) => void
    markTodo: (id: number) => void
    deleteTodo: (id: number) => void
    renameTodo: (id: number, text: string) => void
}

export interface ITodoItemProps {
    id: number,
    title: string,
    completed: boolean
    editMode: boolean
    markTodo: (id: number) => void
    deleteTodo: (id: number) => void
    toggleEditMode: (id: number) => void
    renameTodo: (id: number, text: string) => void
}

export interface IInputEditMode {
    text: string;
    id: number
    toggleEditMode: (id: number) => void
    renameTodo: (id: number, text: string) => void 
}
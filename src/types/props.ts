import React from "react"

export interface IButtonProps {
    text: string,
    addTodo: () => void,
}

export interface IInputProps {
    value: string,
    addTodo: () => void
    handleInput: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export interface ITodoItemProps {
    id: number,
    title: string,
    completed: boolean
    editMode: boolean
}

export interface IInputEditMode {
    text: string
    id: number
}
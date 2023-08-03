import {ReactNode} from "react"

export interface IButtonProps {
    addTodo: () => void,
    children: string,
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

export interface IControlPanel {
    children: ReactNode,
}
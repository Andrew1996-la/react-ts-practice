import { ITodo } from "./data"

export interface IButtonProps {
    text: string,
    addTodo: () => void,
}

export interface IInputProps {
    value: string,
    handleInput: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export interface ITodoListProps {
    todos: ITodo[]
    markTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

export interface ITodoItemProps {
    id: number,
    title: string,
    completed: boolean
    markTodo: (id: number) => void
    deleteTodo: (id: number) => void
}
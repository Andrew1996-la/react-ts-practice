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
}

export interface ITodoItemProps {
    title: string,
    completed: boolean
}
export interface IButtonProps {
    text: string,
    addTodo: () => void,
}

export interface IInputProps {
    value: string,
    handleInput: (e:React.ChangeEvent<HTMLInputElement>) => void
}
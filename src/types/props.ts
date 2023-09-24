import { ReactNode } from 'react';

export interface IButtonProps {
    callback?: () => void;
    children: string;
}

export interface IInputProps {
    value: string;
    addTodo: () => void;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITodoItemProps {
    id: number;
    title: string;
    completed: boolean;
    editMode: boolean;
}

export interface IInputEditMode {
    text: string;
    id: number;
}

export interface IControlPanel {
    children: ReactNode;
}

export interface IInputStandart {
    type: string;
    placeholder: string;
    handleGetUserInfo?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IForm {
    title: string;
    handleRegister?: (email: string, password: string) => void;
    handleLogin?: (email: string, password: string) => void;
}

export interface IInputPassword extends IInputStandart {}

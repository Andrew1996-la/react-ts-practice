import { ITodo } from "./types/data"

export const localStorageSetTodo = (key: string, value: ITodo[]) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const localStorageGetTodo = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "");
}
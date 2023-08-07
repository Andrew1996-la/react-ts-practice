import {configureStore, createListenerMiddleware, isAnyOf} from '@reduxjs/toolkit'
import todoSlise, { addTask, deleteTodo, markTodo, renameTodo, toggleEditMode } from './todoSlise';
import { localStorageSetTodo } from '../localstorage';


export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    matcher: isAnyOf(addTask, markTodo, deleteTodo, toggleEditMode, renameTodo),
    effect: (_, listenerApi) => {
        const state = listenerApi.getState() as RootState;
        localStorageSetTodo('todos', state.todo.todos);
    },    
});

const store = configureStore({
    reducer: {
        todo: todoSlise,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware.middleware),
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
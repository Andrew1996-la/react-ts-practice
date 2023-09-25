import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
    isAuth: boolean,
    email: string | null;
    token: string | null;
    id: string | null;
}

const initialState: IState = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser(state: IState, action: PayloadAction<IState>) {
            state.isAuth = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser (state) {
            state.isAuth = false;
            state.email = null;
            state.token = null;
            state.id = null;
        }
    },
});

export const {createUser, removeUser} = userSlice.actions;
export default userSlice.reducer;

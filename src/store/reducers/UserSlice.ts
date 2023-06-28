import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser"


interface UserState {
    users: IUser[];
    isAuth: boolean;
    curUser: IUser;
    num: number
}

const initialState : UserState = {
    users: [
        {email: 'test@gmail.com', password: '123456'}
    ],
    isAuth: true,
    curUser: {email: '', password: ''},
    num: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorization(state, action : PayloadAction<IUser>) {
            state.isAuth = !state.isAuth
            state.curUser.email = action.payload.email
            state.curUser.password = action.payload.password
        },
        registerUser(state, action : PayloadAction<IUser>) {
            // state.users.push({email: 'test@gmail.com', password: '123456'})
            state.users.push(action.payload)
        },
        incr(state) {
            state.num++

        }

    }
})

export default userSlice.reducer
export const {authorization, registerUser, incr} = userSlice.actions
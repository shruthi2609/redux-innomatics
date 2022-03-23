import { createSlice } from "@reduxjs/toolkit";
const initialValue={username:"user",role:"user"}
const userSlice=createSlice(
    {
        name:"user",
        initialState:{logininfo:initialValue},
        reducers:{
            login:(state,action)=>{
                state.logininfo=action.payload
            },
            logout:(state)=>{
                state.logininfo=initialValue
            }
        }

    }
)
export default userSlice.reducer
export const {login,logout}=userSlice.actions

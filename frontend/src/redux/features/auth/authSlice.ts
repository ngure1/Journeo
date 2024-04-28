import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated: boolean;
}

const initialState : AuthState= {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{
        'setIsAuthenticated':(state,action) =>{
            state.isAuthenticated = action.payload
        }
    }

})

export const { setIsAuthenticated } = authSlice.actions
export default authSlice.reducer;
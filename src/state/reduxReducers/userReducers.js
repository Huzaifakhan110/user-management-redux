import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data : [],
}

export const userSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {
        signUp : (state,action)=>{
            // console.log('action.payload',action.payload)
            state.data = [...state.data,action.payload];
            // console.log('data has been entered',state.data);
        },

        login : (state,action)=>{
               state.data = [...state.data ,action.payload]; 
        }
    }
})
export const {signUp , login} =  userSlice.actions

export default userSlice.reducer
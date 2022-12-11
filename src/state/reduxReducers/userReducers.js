import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data : [],
}

export const userSlice = createSlice({
    name : 'userData',
    initialState,
    reducers : {
        signUp : (state,action)=>{
            console.log('action.payload',action.payload)
            state.data = [...state.data,action.payload];
            console.log('data has been entered',state.data);
        }
    }
})
export const {signUp} =  userSlice.actions

export default userSlice.reducer
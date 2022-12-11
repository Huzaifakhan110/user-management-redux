// import { configureStore } from "@reduxjs/configureStore";
import { configureStore } from "@reduxjs/toolkit";
import signUpData from './reduxReducers/userReducers'

const store = configureStore({
    reducer : {
        signUpvalue : signUpData,
    }
});

export default store;


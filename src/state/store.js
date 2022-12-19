// import { configureStore } from "@reduxjs/configureStore";
import { configureStore } from "@reduxjs/toolkit";
import Data from './reduxReducers/userReducers'

const store = configureStore({
    reducer : {
        signUpvalue : Data,
    }
});

export default store;


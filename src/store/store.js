import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlice'
import userReducer from "../store/userSlice"

export default configureStore({
    reducer: {
        form: formReducer,
        user: userReducer,
    },
})
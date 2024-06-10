import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null,
        nationality: null,
        age: null,
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.nationality = action.payload.nationality;
            state.age = action.payload.age;
        },
        logout: (state) => {
            state.user = null;
        }
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
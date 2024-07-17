import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            username: null,
            // nationality: null,
            // age: null,
        },
    },
    reducers: {
        login: (state, action) => {
            state.userInfo = {
                username: action.payload.username,
                // nationality: action.payload.nationality,
                // age: action.payload.age,
            };
        },
        logout: (state) => {
            state.userInfo = {
                username: null,
                // nationality: null,
                // age: null,
            };
        }
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.userInfo;

export default userSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         username: null,
//         nationality: null,
//         age: null,
//     },
//     reducers: {
//         login: (state, action) => {
//             state.username = action.payload.username;
//             state.nationality = action.payload.nationality;
//             state.age = action.payload.age;
//         },
//         logout: (state) => {
//             state.user = null;
//         }
//     },
// });

// export const { login, logout } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

// export default userSlice.reducer;
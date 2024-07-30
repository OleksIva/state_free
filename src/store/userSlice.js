import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            username: null,
            nationality: null,
            age: null,
            firstName: "",
            lastName: "",
            geburtsort: "",
            loggedIn: false,
        },
    },
    reducers: {
        login: (state, action) => {
            state.userInfo.username = action.payload.username;
            state.userInfo.loggedIn = true;
        },
        logout: (state) => {
            state.userInfo.username = null;
            state.userInfo.loggedIn = false;
        },
        updateDetails: (state, action) => {
            const { firstName, lastName, age, geburtsort } = action.payload;
            state.userInfo.firstName = firstName;
            state.userInfo.lastName = lastName;
            state.userInfo.age = age;
            state.userInfo.geburtsort = geburtsort;
        },
    },
});

export const { login, logout, updateDetails } = userSlice.actions;

export const selectDetails = (state) => state.user.userInfo;

export const selectUser = (state) => state.user.userInfo;

export default userSlice.reducer;











// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         userInfo: {
//             username: null,
//             // nationality: null,
//             // age: null,
//         },
//     },
//     reducers: {
//         login: (state, action) => {
//             state.userInfo = {
//                 username: action.payload.username,
//                 // nationality: action.payload.nationality,
//                 // age: action.payload.age,
//             };
//         },
//         logout: (state) => {
//             state.userInfo = {
//                 username: null,
//                 // nationality: null,
//                 // age: null,
//             };
//         }
//     },
// });

// export const { login, logout } = userSlice.actions;

// export const selectUser = (state) => state.user.userInfo;

// export default userSlice.reducer;


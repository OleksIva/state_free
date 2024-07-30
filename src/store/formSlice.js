import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        firstName: "",
        lastName: "",
        age: "",
        geburtsort: ""
    },
    reducers: {
        updateForm: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { updateForm } = formSlice.actions;

export const selectForm = (state) => state.form;

export default formSlice.reducer;

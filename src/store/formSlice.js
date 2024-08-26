import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        firstName: "",
        lastName: "",
        age: "",
        geburtsort: "",     
        salutation: "",     // Anrede
        title: "",          // Titel (optional)
        otherNames: "",     // Andere Name/n
        documentType: "",   // Ausweiss-oder Aufenthaltsdokument
        documentNumber: "", // Nummer des Dokuments
        nationality: "",    // Welche Staatsgehörigkeit steht in deinen Dokumenten
        ethnicity: "",      // Ethnische Zugehörigkeit
        religion: "",       
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





// import { createSlice } from "@reduxjs/toolkit";

// export const formSlice = createSlice({
//     name: "form",
//     initialState: {
//         firstName: "",
//         lastName: "",
//         age: "",
//         geburtsort: "",     
//         salutation: "",    
//         title: "",          
//         otherNames: "",     
//         documentType: "",   
//         documentNumber: "", 
//         nationality: "",    
//         ethnicity: "",      
//         religion: "",      
//         bornInGermany: "", 
//         hasBirthCertificate: "", 
//         birthDocumented: "", 
//         noCertificateReason: "", 
//         noDocumentationReason: "", 
//     },
//     reducers: {
//         updateForm: (state, action) => {
//             return { ...state, ...action.payload };
//         }
//     }
// });

// export const { updateForm } = formSlice.actions;

// export const selectForm = (state) => state.form;

// export default formSlice.reducer;





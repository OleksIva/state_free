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
      salutation: "",
      title: "",
      otherNames: "",
      documentType: "",
      documentNumber: "",
      ethnicity: "",
      religion: "",
      currentNationality: "", // "Hast du gerade eine Staatsangehörigkeit?"
      attributedNationality: "", // "Wurde dir eine Staatsangehörigkeit zugeschrieben, die du aber nicht besitzt?"
      everHadNationality: "", // "Hattest du jemals eine Staatsangehörigkeit?"
      revokedNationalityDetails: "", 
      applicationCountry: "", // "Land des Antrags"
      applicationDate: "", // "Datum des Antrags"
      decision: "", // "Entscheidung"
      statelessInOtherCountry: "", // "Gilst du in einem anderen Land als staatenlos?"
      hasDocument: "", // "Falls ja, hast du dafür ein Dokument, das das nachweisen kann?"
      triedToObtainProof: "", // "Falls nein, hast du bereits versucht, einen Nachweis dafür zu erlangen?"
      statelessReason: "", // Grund für Staatenlosigkeit
      aufenthaltstitel: null, 
      geburtsurkunde: null,
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
      const {
        firstName, lastName, age, geburtsort,
        salutation, title, otherNames,
        documentType, documentNumber,
        nationality, ethnicity, religion,
        currentNationality, attributedNationality, everHadNationality,
        revokedNationalityDetails, applicationCountry, applicationDate,
        decision, statelessInOtherCountry, hasDocument,
        triedToObtainProof, statelessReason, aufenthaltstitel, geburtsurkunde,
      } = action.payload;

      state.userInfo = {
        ...state.userInfo,
        firstName, lastName, age, geburtsort,
        salutation, title, otherNames,
        documentType, documentNumber,
        nationality, ethnicity, religion,
        currentNationality, attributedNationality, everHadNationality,
        revokedNationalityDetails, applicationCountry, applicationDate,
        decision, statelessInOtherCountry, hasDocument,
        triedToObtainProof, statelessReason, aufenthaltstitel, geburtsurkunde,
      };
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
//             nationality: null,
//             age: null,
//             firstName: "",
//             lastName: "",
//             geburtsort: "",
//             salutation: "",
//             title: "",
//             otherNames: "",
//             documentType: "",
//             documentNumber: "",
//             ethnicity: "",
//             religion: "",
//             loggedIn: false,
//             bornInGermany: "", 
//             hasBirthCertificate: "", 
//             birthDocumented: "", 
//             noCertificateReason: "", 
//             noDocumentationReason: "", 
//         },
//     },
//     reducers: {
//         login: (state, action) => {
//             state.userInfo.username = action.payload.username;
//             state.userInfo.loggedIn = true;
//         },
//         logout: (state) => {
//             state.userInfo.username = null;
//             state.userInfo.loggedIn = false;
//         },
//         updateDetails: (state, action) => {
//             const {
//                 firstName, lastName, age, geburtsort,
//                 salutation, title, otherNames,
//                 documentType, documentNumber,
//                 nationality, ethnicity, religion,
//                 bornInGermany, hasBirthCertificate,
//                 birthDocumented, noCertificateReason,
//                 noDocumentationReason
//             } = action.payload;

//             state.userInfo = {
//                 ...state.userInfo,
//                 firstName, lastName, age, geburtsort,
//                 salutation, title, otherNames,
//                 documentType, documentNumber,
//                 nationality, ethnicity, religion,
//                 bornInGermany, hasBirthCertificate,
//                 birthDocumented, noCertificateReason,
//                 noDocumentationReason
//             };
//         },
//     },
// });

// export const { login, logout, updateDetails } = userSlice.actions;

// export const selectDetails = (state) => state.user.userInfo;

// export const selectUser = (state) => state.user.userInfo;

// export default userSlice.reducer;


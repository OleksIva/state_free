// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWsGo5v9KWE7P2-b0z-tFn5hv8lzCZOa0",
  authDomain: "state-free.firebaseapp.com",
  projectId: "state-free",
  storageBucket: "state-free.appspot.com",
  messagingSenderId: "333822775600",
  appId: "1:333822775600:web:359ed079308dd6fa5338f5",
  measurementId: "G-CNDYJX228S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
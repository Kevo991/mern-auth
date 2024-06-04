// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auths.firebaseapp.com",
  projectId: "mern-auths",
  storageBucket: "mern-auths.appspot.com",
  messagingSenderId: "278113091304",
  appId: "1:278113091304:web:ceac1e0c7cf4d81443935d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
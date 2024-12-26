// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c49b.firebaseapp.com",
  projectId: "mern-estate-6c49b",
  storageBucket: "mern-estate-6c49b.firebasestorage.app",
  messagingSenderId: "955009429138",
  appId: "1:955009429138:web:7e60ff7580f7f0d7ad404b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
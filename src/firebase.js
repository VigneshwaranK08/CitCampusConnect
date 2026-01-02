// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0puliHEf9T338GjkX2I40Hbnv_3eOhZk",
  authDomain: "campusconnect-edc69.firebaseapp.com",
  projectId: "campusconnect-edc69",
  storageBucket: "campusconnect-edc69.firebasestorage.app",
  messagingSenderId: "717371880634",
  appId: "1:717371880634:web:08e8c0961d19cd202c3e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
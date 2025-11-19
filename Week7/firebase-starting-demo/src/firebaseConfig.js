// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFg9fqjQaGSsqwm28M2Zs_h0dT7optPwg",
  authDomain: "week7-demo-a508e.firebaseapp.com",
  projectId: "week7-demo-a508e",
  storageBucket: "week7-demo-a508e.firebasestorage.app",
  messagingSenderId: "943362490258",
  appId: "1:943362490258:web:1e69b20463496ce74d4b4b",
  measurementId: "G-HHTPBJLP7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD0Piter-9N46dLwlEtcOLrk9kmSCgt6vE",
  authDomain: "kumia-7c5f4.firebaseapp.com",
  projectId: "kumia-7c5f4",
  storageBucket: "kumia-7c5f4.appspot.com",
  messagingSenderId: "731670544008",
  appId: "1:731670544008:web:a17b0c6571dc7fe68d693d",
  measurementId: "G-XK1BSFZSWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

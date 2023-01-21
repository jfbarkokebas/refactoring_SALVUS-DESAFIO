// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEX46z5WLhoE5Qd2Y1hdbhhuZUdumOVUw",
  authDomain: "salvus-61726.firebaseapp.com",
  projectId: "salvus-61726",
  storageBucket: "salvus-61726.appspot.com",
  messagingSenderId: "1000940576480",
  appId: "1:1000940576480:web:32e8d8a0790c6396e1ba85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
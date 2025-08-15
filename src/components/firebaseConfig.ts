// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBoGEyawnz8QuGZov8wJK6WS1Y-FnSuqA",
  authDomain: "ssc-users-dc365.firebaseapp.com",
  projectId: "ssc-users-dc365",
  storageBucket: "ssc-users-dc365.firebasestorage.app",
  messagingSenderId: "880046117770",
  appId: "1:880046117770:web:3fa8c69e184b885b0e6e73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

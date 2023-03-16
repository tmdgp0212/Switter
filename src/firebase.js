// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFAz-3sPJ3L8SJz0sOrgH9Phr8QRDbjoE",
  authDomain: "switter-7d7ec.firebaseapp.com",
  projectId: "switter-7d7ec",
  storageBucket: "switter-7d7ec.appspot.com",
  messagingSenderId: "485006746787",
  appId: "1:485006746787:web:d16fbf5539605477cc0b16",
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
export const authService = getAuth();

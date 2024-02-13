// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKLkPazo4yOA3aPxmmo1dJhfHUWHyVrf4",
  authDomain: "linkedin-clone-c11f4.firebaseapp.com",
  projectId: "linkedin-clone-c11f4",
  storageBucket: "linkedin-clone-c11f4.appspot.com",
  messagingSenderId: "931977135343",
  appId: "1:931977135343:web:68afcdcf73a0eddbbb471a"
};

// Initialize Firebase
export const appConfig = initializeApp(firebaseConfig);
export const authConfig = getAuth(appConfig);


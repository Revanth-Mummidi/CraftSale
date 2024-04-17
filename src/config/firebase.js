// Import the functions you need from the SDKs you need
import { initializeApp,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXo50dMt3wONDLszgjO3vadSO9-qvpSrc",
  authDomain: "ecommerce-b6ad3.firebaseapp.com",
  projectId: "ecommerce-b6ad3",
  storageBucket: "ecommerce-b6ad3.appspot.com",
  messagingSenderId: "352773195094",
  appId: "1:352773195094:web:7012dc44e3c5b44da442f7",
  measurementId: "G-8PM4DCK4FS"
};

// Initialize Firebase
export  const firebaseApp = initializeApp(firebaseConfig);
export const getFireAuth=getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);
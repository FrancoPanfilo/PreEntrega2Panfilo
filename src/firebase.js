// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBINRmlH08J9KmT-r4yQdQJPkzfKXOSTTQ",
  authDomain: "proyectoe-comerce.firebaseapp.com",
  projectId: "proyectoe-comerce",
  storageBucket: "proyectoe-comerce.appspot.com",
  messagingSenderId: "118843379565",
  appId: "1:118843379565:web:4375fec8bf3c1ea50b1464",
  measurementId: "G-QRS1NMZBSM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, "Productos");

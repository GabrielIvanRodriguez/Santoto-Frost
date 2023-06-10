// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'                                   //importo base de datos que cree yo con metodo getFirestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmwNOM8EzrMUa1P7xuV43SydW0s1wUDRE",
  authDomain: "santoto-frost.firebaseapp.com",
  projectId: "santoto-frost",
  storageBucket: "santoto-frost.appspot.com",
  messagingSenderId: "804510570641",
  appId: "1:804510570641:web:015cc2cb7f68f214938730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)                             //exporto la base de datos que está dentro de mi firebaseConfig invocando la funcion
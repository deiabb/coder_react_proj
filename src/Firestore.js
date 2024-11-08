// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY9HiWoT4RSn38GIpFFO22fINaHfFah3w",
  authDomain: "react-coder-projeto.firebaseapp.com",
  projectId: "react-coder-projeto",
  storageBucket: "react-coder-projeto.firebasestorage.app",
  messagingSenderId: "487530339965",
  appId: "1:487530339965:web:e74ae4226bfb1d0ae99b14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bancoDados = getFirestore(app)

export default bancoDados;
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA7hKMrbuZkwig94GseDefRWS3SwUjaoCw",
    authDomain: "ecommerce-c97f0.firebaseapp.com",
    projectId: "ecommerce-c97f0",
    storageBucket: "ecommerce-c97f0.appspot.com",
    messagingSenderId: "70186547896",
    appId: "1:70186547896:web:e898257b4419135390124d",
    measurementId: "G-RDKHHEF3HD"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5Ag3WNuAuSzGneu7CeBK2TpI6PXpLh7s",
    authDomain: "zahria.firebaseapp.com",
    projectId: "zahria",
    storageBucket: "zahria.appspot.com",
    messagingSenderId: "222288825767",
    appId: "1:222288825767:web:21c51b089ee73fa25d7a82",
    measurementId: "G-4MXH8N9KBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)
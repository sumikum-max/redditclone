// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//  import firebase  from "firebase";
import "firebase/firestore";
import 'firebase/compat/firestore';
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDZ1d3MKdmWt2EsNdpk2HN48yMdnxpKaZI",
    authDomain: "reddit-clone-cf839.firebaseapp.com",
    projectId: "reddit-clone-cf839",
    storageBucket: "reddit-clone-cf839.appspot.com",
    messagingSenderId: "865704242113",
    appId: "1:865704242113:web:4eaea93b2c864b4f9f9d40",
    measurementId: "G-W88GB2X12E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebaseApp=firebase.initializeApp(firebaseConfig)
const auth = getAuth();
//const db = getFirestore(app);
//const db = getDatabase(app);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
})
export { app, auth, db }
//  export default db;
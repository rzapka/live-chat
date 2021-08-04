import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8XVvGw1SapqsGXKJt9BFWZT2SQ_cuuzc",
    authDomain: "vue3-42336.firebaseapp.com",
    projectId: "vue3-42336",
    storageBucket: "vue3-42336.appspot.com",
    messagingSenderId: "454198414588",
    appId: "1:454198414588:web:727801730a7b9a0bf85b79"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth ,projectFirestore, timestamp}
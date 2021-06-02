import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDMb9OTA8J9_Y-6oXDHybuZ8ppho31-mKY",
    authDomain: "react-auth-1e4a0.firebaseapp.com",
    projectId: "react-auth-1e4a0",
    storageBucket: "react-auth-1e4a0.appspot.com",
    messagingSenderId: "808731344770",
    appId: "1:808731344770:web:a2042d249a90c2adf0199b"
});

export default firebaseConfig;
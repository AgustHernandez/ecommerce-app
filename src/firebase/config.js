import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqTSeE_od2F85RNEIgp5et3g_0bbJmcrM",
    authDomain: "minou-minou.firebaseapp.com",
    projectId: "minou-minou",
    storageBucket: "minou-minou.appspot.com",
    messagingSenderId: "950518437262",
    appId: "1:950518437262:web:b39e5b429b37c645f400df"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
} 
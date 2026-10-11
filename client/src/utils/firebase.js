
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "ainotes-3b701.firebaseapp.com",
  projectId: "ainotes-3b701",
  storageBucket: "ainotes-3b701.firebasestorage.app",
  messagingSenderId: "920045007285",
  appId: "1:920045007285:web:1088d7ea048934a5eb29fc"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
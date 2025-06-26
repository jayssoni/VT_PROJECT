import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:   import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-f421d.firebaseapp.com",
  projectId: "loginonecart-f421d",
  storageBucket: "loginonecart-f421d.firebasestorage.app",
  messagingSenderId: "994687777215",
  appId: "1:994687777215:web:6eda035a8bdeca6f83490a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

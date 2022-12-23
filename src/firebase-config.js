import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmYVPlkSCoSBSohRW200jchnnQGTei1a4",
  authDomain: "authentication-19232.firebaseapp.com",
  projectId: "authentication-19232",
  storageBucket: "authentication-19232.appspot.com",
  messagingSenderId: "407649153616",
  appId: "1:407649153616:web:f91d2dd6a8bc724f999755",
  measurementId: "G-FL948FL04J"
};

const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
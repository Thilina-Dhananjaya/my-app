import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {        //"private" = Removed bcs of sensitivity
  apiKey: "private",
  authDomain: "private",
  projectId: "private",
  storageBucket: "private",
  messagingSenderId: "private",
  appId: "private",
  measurementId: "private"
};

const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);

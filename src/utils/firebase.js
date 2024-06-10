
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCQJRaEendF_V-_-_tRUjEQJdw6WpAo1co",
  authDomain: "olx-clone-fb2c0.firebaseapp.com",
  projectId: "olx-clone-fb2c0",
  storageBucket: "olx-clone-fb2c0.appspot.com",
  messagingSenderId: "1046290707231",
  appId: "1:1046290707231:web:58637717e398fef7d8f62a",
  measurementId: "G-F6E7PH8E4M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app) 
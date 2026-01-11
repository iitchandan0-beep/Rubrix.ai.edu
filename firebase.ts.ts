
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Fix: Use standard modular import for getAuth to resolve missing member error
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBlShBoifWQGGyrUf-xDmma6mL-Ipvh94",
  authDomain: "backend-133ae.firebaseapp.com",
  databaseURL: "https://backend-133ae-default-rtdb.firebaseio.com",
  projectId: "backend-133ae",
  storageBucket: "backend-133ae.firebasestorage.app",
  messagingSenderId: "1006128169609",
  appId: "1:1006128169609:web:8584b531bc740be1277c58"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

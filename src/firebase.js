
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_FIREBASE_API_KEY",
  authDomain: "formapprovalsystem.firebaseapp.com",
  projectId: "formapprovalsystem",
  storageBucket: "formapprovalsystem.firebasestorage.app",
  messagingSenderId: "148947897758",
  appId: "1:148947897758:web:0637f1f0d8fb0df5f05a8f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

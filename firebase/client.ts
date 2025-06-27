// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfiHku_rdaHo1t2_1q1zNSG1NbE9BAyaM",
  authDomain: "prepwise-f8b3c.firebaseapp.com",
  projectId: "prepwise-f8b3c",
  storageBucket: "prepwise-f8b3c.firebasestorage.app",
  messagingSenderId: "1091382072532",
  appId: "1:1091382072532:web:73c74b77dd41049b901741",
  measurementId: "G-ML3EK03E2Q"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
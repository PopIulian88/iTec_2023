import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyDzRRwr4XfXfU3v6EQEPwSGMFxvLW8jmJE",
  authDomain: "itec2023-8e953.firebaseapp.com",
  projectId: "itec2023-8e953",
  storageBucket: "itec2023-8e953.appspot.com",
  messagingSenderId: "466466419565",
  appId: "1:466466419565:web:1bfb16ebe3f233589e6064",
  measurementId: "G-YXXRKBHWCY"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export {
  //functii pt autentificare
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth
}
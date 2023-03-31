import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

//firestore -- database methods and functions
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  updateDoc
} from "firebase/firestore"

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
const firestore = getFirestore()

const userCollection = collection(firestore, "users")

async function addUserId(mail,username,points,visited,id){

  await updateDoc(doc(firestore,"users",id),{
    username:username,
    mail:mail,
    points:points,
    visited:visited,
    id:id
  })
}
async function addNewUser(username, mail){
  const newUser = await addDoc(userCollection,{
    username:username,
    mail:mail,
    points:0,
    visited:[],
    id:""
  }).then(res=>addUserId(mail,username,0,[],res.id))
  
}

export {
  //functii pt autentificare
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,

  addNewUser
}
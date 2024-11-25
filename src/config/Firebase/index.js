// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoBt1IXVsttoWiX8P04UAlOQFQaI_xoYQ",
  authDomain: "mid-project-72c55.firebaseapp.com",
  databaseURL: "https://mid-project-72c55-default-rtdb.firebaseio.com",
  projectId: "mid-project-72c55",
  storageBucket: "mid-project-72c55.firebasestorage.app",
  messagingSenderId: "128360769139",
  appId: "1:128360769139:web:2a0019a48185461f0bac06",
  measurementId: "G-1WBWS1G9FC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

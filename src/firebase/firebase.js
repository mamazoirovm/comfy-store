// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDucclQ85wZ0e6p_BGBrNGnaDMCou1PC6M",
  authDomain: "comfy-store-8aae8.firebaseapp.com",
  projectId: "comfy-store-8aae8",
  storageBucket: "comfy-store-8aae8.appspot.com",
  messagingSenderId: "230865535939",
  appId: "1:230865535939:web:167302b99091b283f17376",
  measurementId: "G-8KPGC1ZYXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
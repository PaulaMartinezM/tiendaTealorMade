// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSyutYyA1mfPdd9T0Y6nsvJhlYynQT9L0",
  authDomain: "tealormadeecomerce.firebaseapp.com",
  projectId: "tealormadeecomerce",
  storageBucket: "tealormadeecomerce.appspot.com",
  messagingSenderId: "160065600274",
  appId: "1:160065600274:web:a5d9342b1426b18fc751cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}
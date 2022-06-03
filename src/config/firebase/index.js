// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDus383ZSVxKy0IwHXU1zOds6AEptO1y7s",
  authDomain: "esdev-site.firebaseapp.com",
  projectId: "esdev-site",
  storageBucket: "esdev-site.appspot.com",
  messagingSenderId: "115899069384",
  appId: "1:115899069384:web:71f06e172d4e4e3d5c06fd",
  measurementId: "G-YEJKS7MY7V",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

export default firebase;

const analytics = getAnalytics(firebase);

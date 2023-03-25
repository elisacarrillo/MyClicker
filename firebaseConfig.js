// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEC7ZPR-FcHCxILQDlf6AUIDwdzKtcC58",
  authDomain: "myclicker-3e892.firebaseapp.com",
  projectId: "myclicker-3e892",
  storageBucket: "myclicker-3e892.appspot.com",
  messagingSenderId: "75645842647",
  appId: "1:75645842647:web:4a47c6013218e86be66c92",
  measurementId: "G-4DRK7DEK3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
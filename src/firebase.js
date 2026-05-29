// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8wlhsMYkOqLIk6umLK5B2vxudTlK0pzo",
  authDomain: "eve-cosmetics1.firebaseapp.com",
  projectId: "eve-cosmetics1",
  storageBucket: "eve-cosmetics1.firebasestorage.app",
  messagingSenderId: "320253026090",
  appId: "1:320253026090:web:27e2b066714f02eea4c853",
  measurementId: "G-1JEYZH361M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
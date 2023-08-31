// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeXrGTF9UYplNBz7P8muYoSqd6_G0VIn0",
  authDomain: "projectf-ba98c.firebaseapp.com",
  databaseURL:
    "https://projectf-ba98c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectf-ba98c",
  storageBucket: "projectf-ba98c.appspot.com",
  messagingSenderId: "73749149932",
  appId: "1:73749149932:web:3549befdf3d7c352f6cdc9",
  measurementId: "G-T39ZNR5KL1",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Export auth instance
export { app, auth, analytics }; // Export all necessary instances
export default app;
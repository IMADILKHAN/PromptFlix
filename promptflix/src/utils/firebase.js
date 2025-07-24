// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5GO-xMCYk7WudgHkvieWFzN8lB6YbyWM",
  authDomain: "promptflix-5f191.firebaseapp.com",
  projectId: "promptflix-5f191",
  storageBucket: "promptflix-5f191.firebasestorage.app",
  messagingSenderId: "1067999217670",
  appId: "1:1067999217670:web:cf3bbee40358e0810e5b87",
  measurementId: "G-QNXB11JG6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth();
const analytics = getAnalytics(app);

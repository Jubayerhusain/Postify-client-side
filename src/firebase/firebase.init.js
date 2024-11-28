import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2MyJ8pvLluHp-odQlWt7JF-SvgMvorzs",
  authDomain: "postify-e46c4.firebaseapp.com",
  projectId: "postify-e46c4",
  storageBucket: "postify-e46c4.firebasestorage.app",
  messagingSenderId: "818833252022",
  appId: "1:818833252022:web:ad4cdd2eade0bd217c9017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

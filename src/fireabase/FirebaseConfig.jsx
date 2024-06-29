import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKd3Cq_6SMRv9bzj8ildntOKsbOQy-UXU",
  authDomain: "ecoshop-9d9ab.firebaseapp.com",
  projectId: "ecoshop-9d9ab",
  storageBucket: "ecoshop-9d9ab.appspot.com",
  messagingSenderId: "205791493612",
  appId: "1:205791493612:web:82368f9c665eee699314c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth } ;
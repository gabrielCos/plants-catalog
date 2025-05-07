import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxum2MVluWWEFdR9cTnzfixUbfq1PJdSY",
  authDomain: "plantscatalog-15cdf.firebaseapp.com",
  projectId: "plantscatalog-15cdf",
  storageBucket: "plantscatalog-15cdf.firebasestorage.app",
  messagingSenderId: "962463360020",
  appId: "1:962463360020:web:ba91f26c130ae07dd9f301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
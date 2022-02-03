import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS6U4ueRlAHdVP6aNSmdlEOgrXyE0ofeA",
  authDomain: "rmad---02.firebaseapp.com",
  projectId: "rmad---02",
  storageBucket: "rmad---02.appspot.com",
  messagingSenderId: "908695927501",
  appId: "1:908695927501:web:f725efc5418581ebdd0784"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
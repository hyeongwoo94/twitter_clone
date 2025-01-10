
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8S9vUZG5HNk1FGFttppnQRD5gYgWHW9M",
  authDomain: "twitter-clon1.firebaseapp.com",
  projectId: "twitter-clon1",
  storageBucket: "twitter-clon1.firebasestorage.app",
  messagingSenderId: "712378365550",
  appId: "1:712378365550:web:98eb75fb28361a4347d87f"
};


const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
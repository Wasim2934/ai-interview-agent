import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e3d23.firebaseapp.com",
  projectId: "interviewiq-e3d23",
  storageBucket: "interviewiq-e3d23.firebasestorage.app",
  messagingSenderId: "853078139737",
  appId: "1:853078139737:web:4dbcbb4abac72880c1e248",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

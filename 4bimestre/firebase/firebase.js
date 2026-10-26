
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzDe6-doQgnkinrFoiYzUABSSma3nrTkU",
  authDomain: "nicart-5e28c.firebaseapp.com",
  projectId: "nicart-5e28c",
  storageBucket: "nicart-5e28c.firebasestorage.app",
  messagingSenderId: "938338337262",
  appId: "1:938338337262:web:94c9b002b7d57f0a680eff"
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

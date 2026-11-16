
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzDe6-doQgnkinrFoiYzUABSSma3nrTkU",
  authDomain: "nicart-5e28c.firebaseapp.com",
  projectId: "nicart-5e28c",
  storageBucket: "nicart-5e28c.firebasestorage.app",
  messagingSenderId: "938338337262",
  appId: "1:938338337262:web:94c9b002b7d57f0a680eff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
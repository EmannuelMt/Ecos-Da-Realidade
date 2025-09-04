import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Sua configuração do Firebase (substitua com suas próprias credenciais)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgAd-ljw4nKN6S9egGTGClyZ-r9pgjGx0",
  authDomain: "ecos-da-realidade.firebaseapp.com",
  projectId: "ecos-da-realidade",
  storageBucket: "ecos-da-realidade.firebasestorage.app",
  messagingSenderId: "588133618156",
  appId: "1:588133618156:web:7856cc953643c750c470c9",
  measurementId: "G-CP9WV2RZXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
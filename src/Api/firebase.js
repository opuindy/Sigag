import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Initialize Firebase
initializeApp(JSON.parse(import.meta.env.VITE_FIREBASE_CONFIGURATION));

// Initialize Services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'contacts');

export const addFormData = (form) => {
  addDoc(colRef, {
    name: form.name,
    email: form.email,
  });
};

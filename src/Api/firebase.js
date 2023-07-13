import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDCGWMqRUifXtvufRpfPmP-xScN39oKUlM',
  authDomain: 'sigag-lauren-frontend.firebaseapp.com',
  projectId: 'sigag-lauren-frontend',
  storageBucket: 'sigag-lauren-frontend.appspot.com',
  messagingSenderId: '403159052350',
  appId: '1:403159052350:web:22606cb9bb26f346bf216f',
  measurementId: 'G-34YR9K95L2',
};

// Initialize Firebase
initializeApp(firebaseConfig);

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

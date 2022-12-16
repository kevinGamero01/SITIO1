// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAv0GRrhE86d2JGqD0YuhGvC1A3FuEF-w",
    authDomain: "fb-bdreact2-3f06f.firebaseapp.com",
    projectId: "fb-bdreact2-3f06f",
    storageBucket: "fb-bdreact2-3f06f.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC1zOcHD9x7j2Z1pufVBGZjRP1m43xbIDc',
    authDomain: 'fb-bdreact2-17650.firebaseapp.com',
    projectId: 'fb-bdreact2-17650',
    storageBucket: "fb-bdreact2-17650.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUOkOtnjSii9n1krGcpuj7ATkT1JWt14o",
    authDomain: "infnet---react2---tp3.firebaseapp.com",
    projectId: "infnet---react2---tp3",
    storageBucket: "infnet---react2---tp3.appspot.com",
    messagingSenderId: "350520141978",
    appId: "1:350520141978:web:b53758b810227ad0305723"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, auth };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZ2rkCXsmuAdKHtbBOGRGG2OSz3dPsdOc",
  authDomain: "assignment-f1a8b.firebaseapp.com",
  projectId: "assignment-f1a8b",
  storageBucket: "assignment-f1a8b.appspot.com",
  messagingSenderId: "317425638478",
  appId: "1:317425638478:web:6c814c6761df72dc87771f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

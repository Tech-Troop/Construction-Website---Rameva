import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAX1zFu5quL8dpsCcE3CUACq07HkhRF61U",
  authDomain: "rameva-9bee0.firebaseapp.com",
  projectId: "rameva-9bee0",
  storageBucket: "rameva-9bee0.appspot.com",
  messagingSenderId: "94003452861",
  appId: "1:94003452861:web:db1ead91414e4ff50cd0d4",
  measurementId: "G-9DXN6CEM8X"
};



  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);

  export { db }
  export const auth = getAuth(app)
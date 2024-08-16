import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA696a4iNL_YpB54nv4XjTzo0VSMmMjr_M",
  authDomain: "rameva-construction-f523b.firebaseapp.com",
  projectId: "rameva-construction-f523b",
  storageBucket: "rameva-construction-f523b.appspot.com",
  messagingSenderId: "1003575592689",
  appId: "1:1003575592689:web:06fe1800474c3636ba0b50",
  measurementId: "G-BG5H5Q73M1"
};



  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);

  export { db }
  export const auth = getAuth(app)
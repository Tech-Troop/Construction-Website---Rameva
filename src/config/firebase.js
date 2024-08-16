import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";






  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);

  export { db }
  export const auth = getAuth(app)
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0MwvwHPmkcFnH4KypcVkVSk5dS3CeWq4",
  authDomain: "rameva-construction-34baf.firebaseapp.com",
  projectId: "rameva-construction-34baf",
  storageBucket: "rameva-construction-34baf.appspot.com",
  messagingSenderId: "108670688015",
  appId: "1:108670688015:web:fad25e456a7126032dfc7a",
  measurementId: "G-57WDE7S2XK"
};



  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);

  export { db }
  export const auth = getAuth(app)
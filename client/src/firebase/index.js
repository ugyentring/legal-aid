import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpFG_pRdYGMqyjHrzW3lvOxDC8_OPN7xk",
  authDomain: "testing-87772.firebaseapp.com",
  projectId: "testing-87772",
  storageBucket: "testing-87772.appspot.com",
  messagingSenderId: "716413583530",
  appId: "1:716413583530:web:1a7d0cfd1453cd1a7f90d3",
  measurementId: "G-3G511C0JWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage, app as default };

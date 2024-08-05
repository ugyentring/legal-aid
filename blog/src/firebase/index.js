import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpFG_pRdYGMqyjHrzW3lvOxDC8_OPN7xk",
  authDomain: "testing-87772.firebaseapp.com",
  projectId: "testing-87772",
  storageBucket: "testing-87772.appspot.com",
  messagingSenderId: "716413583530",
  appId: "1:716413583530:web:1a7d0cfd1453cd1a7f90d3",
  measurementId: "G-3G511C0JWV"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


const storage = firebase.storage();

export { storage, firebase as default };

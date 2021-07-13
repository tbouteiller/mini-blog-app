import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT,
  storageBucket: process.env.REACT_APP_FB_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER,
  appId: process.env.REACT_APP_FB_APP,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };

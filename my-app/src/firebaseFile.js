import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIxNGWWaJyQSep2LrReY45-ZpJseOZFrg",
    authDomain: "clone-react-74657.firebaseapp.com",
    projectId: "clone-react-74657",
    storageBucket: "clone-react-74657.appspot.com",
    messagingSenderId: "867979735516",
    appId: "1:867979735516:web:ec2669cb8d6d9e56119f19"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db}
export default firebase;


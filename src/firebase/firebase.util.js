import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBGy7va4RU5edod9dRvdkMY783GKeFOAC0",
    authDomain: "crwn-db-a5308.firebaseapp.com",
    projectId: "crwn-db-a5308",
    storageBucket: "crwn-db-a5308.appspot.com",
    messagingSenderId: "672500153583",
    appId: "1:672500153583:web:0e96656820b457841cef1a",
    measurementId: "G-MRNS6FQ8Q6"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
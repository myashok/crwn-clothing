import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBGy7va4RU5edod9dRvdkMY783GKeFOAC0',
    authDomain: 'crwn-db-a5308.firebaseapp.com',
    projectId: 'crwn-db-a5308',
    storageBucket: 'crwn-db-a5308.appspot.com',
    messagingSenderId: '672500153583',
    appId: '1:672500153583:web:0e96656820b457841cef1a',
    measurementId: 'G-MRNS6FQ8Q6'
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const getUserCartRef = async userId => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const snapShot = await cartsRef.get();
    if (snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc();
        await cartDocRef.set({ userId, cartItems: [] });
        return cartDocRef;
    } else {
        return snapShot.docs[0].ref;
    }
};

export const createCollectionAndStoreDocuments = async (collectionKey, itemObject) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    itemObject.forEach(item => {
        const documentReference = collectionRef.doc();
        batch.set(documentReference, item);
    });
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export default firebase;
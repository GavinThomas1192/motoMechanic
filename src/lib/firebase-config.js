// import firebase from 'firebase'

// const config = {
//     apiKey: __API_KEY__,
//     authDomain: __AUTH_DOMAIN__,
//     databaseURL: __DATABASE_URL__,
//     projectId: __PROJECT_ID__,
//     storageBucket: __STORAGE_BUCKET__,
//     messagingSenderId: __MESSAGING_SENDER_ID__,
// };

// export const firebaseApp = firebase.initializeApp(config)
// export const database = firebase.database(firebaseApp)

import * as firebase from 'firebase';
const config = {
    apiKey: __API_KEY__,
    authDomain: __AUTH_DOMAIN__,
    databaseURL: __DATABASE_URL__,
    projectId: __PROJECT_ID__,
    storageBucket: __STORAGE_BUCKET__,
    messagingSenderId: __MESSAGING_SENDER_ID__,
};
firebase.initializeApp(config);
export default firebase;







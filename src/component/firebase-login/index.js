import React from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';





// Configure Firebase.
const config = {
    apiKey: __API_KEY__,
    authDomain: __AUTH_DOMAIN__,
    databaseURL: __DATABASE_URL__,
};
const firebaseApp = firebase.initializeApp(config)




class SignInScreen extends React.Component {
    // Configure FirebaseUI.
    render() {
        const uiConfig = {
            // Popup signin flow rather than redirect flow.
            signInFlow: 'popup',
            queryParameterForWidgetMode: 'mode',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            signInSuccessUrl: '/',
            // We will display Google and Facebook as auth providers.
            signInOptions: [

                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccess: () => {
                    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                        .then(function () {
                            // Existing and future Auth states are now persisted in the current
                            // session only. Closing the window would clear any existing state even
                            // if a user forgets to sign out.
                            // ...
                            // New sign-in will be persisted with session persistence.
                            return firebase.auth().signInWithEmailAndPassword(email, password);
                        })
                        .catch(function (error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                        });
                }
            }
        };
        return (
            <div>
                <h1>TESTING FIREBASE OAUTH</h1>

                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
            </div>
        );
    }
}

export default SignInScreen
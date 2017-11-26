import React from 'react';
import { connect } from 'react-redux'
import { FirebaseAuth } from 'react-firebaseui';
import firebase from '../../lib/firebase-config'
import { loginRequest, tokenSetRequest } from '../../action/auth-actions'










class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            packaged: {},
            token: '',
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(result) {
        // ************** grabbing token from local **************
        let token = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBl19lQkKFQiGh9V4ZTFLSRVftqGLZw-Y8:[DEFAULT]'));
        this.props.tokenSet(token.stsTokenManager.accessToken)

        // ************** creating user from firebase oauth return **************
        console.log('hereererereererere', result);
        let combined = {}
        combined.uid = result.uid
        combined.username = result.displayName
        combined.email = result.email
        this.props.loginRequest(combined);
    }
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
                signInSuccess: (result) => {
                    this.handleLogin(result);
                    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                        .then(function (result) {
                            console.log('results are in', result)
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

                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
}

let mapStateToProps = state => ({
    auth: state.auth,
    user: state.user,
});

let mapDispatchToProps = dispatch => ({
    loginRequest: (user) => dispatch(loginRequest(user)),
    tokenSet: (token) => dispatch(tokenSetRequest(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
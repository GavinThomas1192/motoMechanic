import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';
import { tokenSetRequest, loginRequest } from '../../action/auth-actions'
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {



        const responseFacebook = (response) => {
            //I commented this out for safety 
            // console.log(response);
            this.props.tokenSet(response.accessToken);
            this.props.login(response);
        }


        return (
            <div>


                <FacebookLogin
                    appId={__FACEBOOK_APP_ID__}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} />
            </div>
        )
    }
}


let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
    tokenSet: token => dispatch(tokenSetRequest(token)),
    login: user => dispatch(loginRequest(user)),

});


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

// import React from 'react';
// import { FirebaseAuth } from 'react-firebaseui';
// import firebase from 'firebase';

// // Configure Firebase.
// const config = {
//     apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
//     authDomain: 'myproject-1234.firebaseapp.com',
//     // ...
// };
// firebase.initializeApp(config);

// // Configure FirebaseUI.
// const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     signInSuccessUrl: '/signedIn',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ]
// };

// class SignInScreen extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>My App</h1>
//                 <p>Please sign-in:</p>
//                 <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//             </div>
//         );
//     }
// }

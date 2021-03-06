import React from 'react';
import './_firebaseLogin.scss'
import NavBar from '../navbar'
import { connect } from 'react-redux'
import { FirebaseAuth } from 'react-firebaseui';
import firebase from '../../lib/firebase-config'
import { loginRequest, tokenSetRequest, facebookLoginRequest, passwordResetRequest } from '../../action/auth-actions'
import FacebookLogin from 'react-facebook-login';
import firebaseui from 'firebaseui'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';





class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            packaged: {},
            token: '',
            shadow: 5,
            showPasswordReset: false,
            email: '',
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseOver() {
        this.setState({ shadow: 1 });
    }

    onMouseOut() {
        this.setState({ shadow: 5 });
    }

    sendPasswordResetEmail() {
        this.props.passwordReset(this.state.email)
        this.setState({
            showPasswordReset: !this.state.showPasswordReset,
        })
    }


    handleLogin(result) {

        // ************** grabbing token from local **************
        let token = JSON.parse(localStorage.getItem(`firebase:authUser:` + __API_KEY__ + `:[DEFAULT]`));
        this.props.tokenSet(token.stsTokenManager.accessToken)


        // ************** creating user from firebase oauth return **************
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
            // queryParameterForWidgetMode: 'mode',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            // signInSuccessUrl: '*/',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            callbacks: {
                signInSuccess: (result) => {
                    this.handleLogin(result);
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
        const responseFacebook = (response) => {
            this.props.tokenSet(response.accessToken);
            localStorage.setItem(`firebase:authUser:` + __API_KEY__ + `:[DEFAULT]`, response.accessToken)
            this.props.facebookLoginRequest(response);
        }

        const style = {
            margin: 'auto',
        }
        return (
            <div>


                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

                <div className='facebookLogin'>
                    <Paper
                        style={style}
                        onMouseOver={this.onMouseOver}
                        onMouseOut={this.onMouseOut}
                        zDepth={this.state.shadow} >


                        <FacebookLogin
                            appId={__FACEBOOK_APP_ID__}
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook} />

                    </Paper>
                </div>

                {this.state.showPasswordReset ? <div>
                    <p>Input the email you signed up with, and we will email you directions to reset your password.</p>
                    <form >
                        <TextField
                            hintText="email"
                            floatingLabelText="email"
                            multiLine={false}
                            rows={1}
                            name='email'
                            type='text'
                            value={this.state.email}
                            onChange={(email) => this.setState({ email })}
                        />
                    </form>
                    <RaisedButton label='Send Password Reset Email' onClick={this.sendPasswordResetEmail.bind(this)} primary={true} type='submit' />
                    {/* <Button style={{ backgroundColor: '#757575', margin: 5 }} block onPress={this.sendPasswordResetEmail.bind(this)}>Send Password Reset Email</Button> */}
                </div>
                    : <div>
                        <p>Forgot your password? Reset it <p style={{ color: 'red', textDecorationLine: "underline", }} onClick={() => this.setState({ showPasswordReset: !this.state.showPasswordReset })}>here</p></p>
                    </div>}

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
    facebookLoginRequest: (user) => dispatch(facebookLoginRequest(user)),
    tokenSet: (token) => dispatch(tokenSetRequest(token)),
    passwordReset: (email) => dispatch(passwordResetRequest(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Encyclopedia from '../encyclopedia'
import Home from '../home'
import BikeContainer from '../bike-container'
import NavBar from '../navbar'
import LandingPage from '../landing-page'
import SignInScreen from '../firebase-login'
import { userFetchRequest, tokenSetRequest } from '../../action/auth-actions';






class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let token = localStorage.getItem(`firebase:authUser:` + __API_KEY__ + `:[DEFAULT]`);
        if (token) this.props.tokenSet(token);

        // { !this.props.user.uid ? this.props.userFetch() : undefined }

    }
    componentDidUpdate() {
        console.log('COMPONENT DID UPDATE', this.props.user)

        // { !this.props.user.uid ? this.props.userFetch() : undefined }
    }

    render() {
        return (
            <div className='home'>

                <BrowserRouter>
                    <div>

                        {this.props.user.uid ?
                            <NavBar /> :
                            undefined}
                        {!this.props.user.uid ?
                            <SignInScreen /> :
                            undefined}

                        <Route exact path="/encyclopedia" component={Encyclopedia} />
                        <Route exact path="/login" component={() => !this.props.auth ? <LandingPage /> : <Redirect to='/' />} />
                        <Route exact path="/" component={() => this.props.auth ? <Home /> : <Redirect to='/login' />} />
                        <Route exact path="/bikes" component={BikeContainer} />


                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    user: state.user,
    auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
    tokenSet: token => dispatch(tokenSetRequest(token)),
    userFetch: () => dispatch(userFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
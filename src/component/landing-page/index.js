import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';
import { tokenSetRequest } from '../../action/auth-actions'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const responseFacebook = (response) => {
            //I commented this out for safety 
            // console.log(response);
            this.props.tokenSet(response.accessToken);
        }

        return (
            //Here we can change autoload=True and they won't have to ever press login on their own!
            <FacebookLogin
                appId={__FACEBOOK_APP_ID__}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} />
        )
    }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
    tokenSet: token => dispatch(tokenSetRequest(token)),

});


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

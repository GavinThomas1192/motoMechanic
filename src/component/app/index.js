import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import EncycloNavbar from '../encyclopedia'
import Home from '../home'



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>

                        <Route exact path="/encycleopedia" component={EncycloNavbar} />
                        <Route exact path="/" component={Home} />

                        <Home />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

let mapStateToProps = state => ({

});

let mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
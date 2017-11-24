import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Encyclopedia from '../encyclopedia'
import Home from '../home'
import Bike from '../bike'
import NavBar from '../navbar'




class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home'>

                <BrowserRouter>
                    <div>
                        <NavBar />

                        <Route exact path="/encyclopedia" component={Encyclopedia} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/bikes" component={Bike} />


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
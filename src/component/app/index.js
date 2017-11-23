import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Encyclopedia from '../encyclopedia'
import Home from '../home'
import BikeList from '../bike-list'



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>

                        <Route exact path="/encyclopedia" component={Encyclopedia} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/bikes" component={BikeList} />

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
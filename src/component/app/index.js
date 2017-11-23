import React from 'react';
import { connect } from 'react-redux'



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    This is from the App Component.
                </h1>
            </div>
        )
    }
}

let mapStateToProps = state => ({

});

let mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
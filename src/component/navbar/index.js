import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Encyclopedia from '../encyclopedia'
import { Navbar, Nav } from 'react-bootstrap'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';




class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

        this.handleClose = this.handleClose.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {

        this.setState({ open: !this.state.open });
    }

    handleClose() {
        this.setState({ open: false });
    }

    componentWillReceiveProps(nextProps) {
        console.log('HEHEHEHEH', nextProps);
    }


    render() {
        return (
            <div >
                {/* ***** NAVBAR FOR DRAWER ***** */}

                <AppBar
                    style={{ backgroundColor: '#757575' }}
                    title="MotoMechanic"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    onRightIconButtonTouchTap={this.handleToggle}
                />}
                />
                    {/* iconElementRight={<img src={this.props.user.picture.data.url  */}
                <div>

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}
                    >

                        <MenuItem
                            containerElement={<Link to="/" />}
                            onClick={this.handleClose}>Home</MenuItem>
                        <MenuItem
                            containerElement={<Link to="/encyclopedia" />}
                            onClick={this.handleClose}>Encyclopedia</MenuItem>

                        <MenuItem onClick={this.handleClose}
                            containerElement={<Link to="/bikes" />}
                        >The Garage</MenuItem>
                    </Drawer>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => ({
    auth: state.auth,
    user: state.user,
});

let mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
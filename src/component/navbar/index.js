import React from 'react';
import { Link } from 'react-router-dom';
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


    render() {
        return (
            <div >
                {/* ***** NAVBAR FOR DRAWER ***** */}

                <AppBar
                    style={{ backgroundColor: '#757575' }}
                    title="MotoMechanic"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    onRightIconButtonTouchTap={this.handleToggle}
                />
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

export default NavBar;

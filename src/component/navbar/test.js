import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';

import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import {Link } from 'react-router-dom'


const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends Component {

  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    // console.log(this.props.auth)
    // if(!this.props.auth)
      // return <div> Loading... </div>;

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>



        {/* the log switch */}
       {/* <FormGroup>        
                 <FormControlLabel
                   control={
                     <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                   }
                   label={auth ? 'Logout' : 'Login'}
                 />
               </FormGroup>*/}

        <AppBar position="static">
          <Toolbar>

            {/*
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}

            <Typography type="title" color="inherit" className={classes.flex}>
              المواعيد
            </Typography>



            {/*If logged in */}
            {this.props.auth && (
              <div>
                <IconButton
                  aria-owns="menu-appbar-logged"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar-logged"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {/*Changing font for this text is on the them and there search for subheading*/}
                  <MenuItem onClick={this.handleClose}  containerelement={<Link to="/dashboard" />}>الملف الشخصي</MenuItem>
                  <MenuItem onClick={this.handleClose} href="/api/logout">تسجيل الخروج</MenuItem>
                </Menu>
              </div>
            )}
            {/*end*/}




            {/*If logged out */}
            {!this.props.auth && (
              <div>
               <Button color="contrast" href="/auth/google/">تسجيل الدخول</Button>
              </div>
            )}
            {/*end*/}


          </Toolbar>
        </AppBar>


      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({auth}){
  return {auth}
}

export default withStyles(styles)(connect(mapStateToProps)(MenuAppBar));
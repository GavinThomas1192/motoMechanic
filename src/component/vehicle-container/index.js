import React from 'react';
import { connect } from 'react-redux';
import vehicleCreate from '../vehicle-create';
import vehicleList from '../vehicle-list'
import uuid from 'uuid/v1';
import AppBar from 'material-ui/AppBar';
import { vehicleCreateRequest, vehicleUpdateRequest, vehicleDeleteRequest } from '../../action/auth-actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';



class vehicleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglevehicleCreate: false,
      novehicles: true,
      toggleSinglevehicle: false,
      clickedMenuvehicle: {},
    }
    this.toggleCreatevehicle = this.toggleCreatevehicle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSinglevehicle = this.handleSinglevehicle.bind(this);


  }
  toggleCreatevehicle() {
    this.setState({ togglevehicleCreate: !this.state.togglevehicleCreate })
  }

  handleToggle() {

    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ novehicles: false, open: false, toggleSinglevehicle: false, togglevehicleCreate: false, });
  }

  handleSinglevehicle(clickedvehicle) {
    this.setState({ clickedMenuvehicle: clickedvehicle, toggleSinglevehicle: true })
  }



  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    const actionsTwo = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Lets get to it"
        primary={true}
        keyboardFocused={true}
        onClick={this.toggleCreatevehicle}
      />,
    ];
    const singleActions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Edit"
        primary={true}
        keyboardFocused={true}
        onClick={this.toggleCreateForm}
      />,
    ];
    return (
      <div>
        <RaisedButton primary={true} label="New vehicle" onClick={this.toggleCreatevehicle} />
        {/* ***** POPUP IF NO EXISTING vehicleS ***** */}
        {this.props.user.allvehicles == null || this.props.user.allvehicles == null ?
          <div>
            <Dialog
              title="It looks like you have no vehicles! Lets change that."
              actions={actionsTwo}
              modal={false}
              open={this.state.novehicles}
              onRequestClose={this.handleClose}
            >
            </Dialog>
          </div>
          : undefined}
        {/* ***** CREATE NEW vehicle ***** */}
        <Dialog
          title="Input New vehicle"
          actions={actions}
          modal={false}
          open={this.state.togglevehicleCreate}
          onRequestClose={this.toggleCreatevehicle}
          autoScrollBodyContent={true}

        >
          <vehicleCreate
            buttonText={'Submit'}
            onComplete={this.props.user.allvehicles ? this.props.vehicleUpdate : this.props.vehicleCreate}
            toggle={this.toggleCreatevehicle} />
        </Dialog>

        {/* ***** SINGLE vehicle VIEW AFTER CLICKING FROM LIST***** */}
        <Dialog
          title="vehicle Stats"
          actions={singleActions}
          modal={false}
          open={this.state.toggleSinglevehicle}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}

        >

          <div>
            <pre>
              <h2>{this.state.clickedMenuvehicle.make}</h2>
              <p>{this.state.clickedMenuvehicle.model}</p>
              <p>{this.state.clickedMenuvehicle.year}</p>
              <p>{this.state.clickedMenuvehicle.name}</p>
              <p>{this.state.clickedMenuvehicle.mileage}</p>
              <p>{this.state.clickedMenuvehicle.color}</p>

            </pre>
          </div>
          {/* ***** EDIT POPUP AFTER CLICKING MENU ITEM ***** */}
          <Dialog
            title="Update This Note"
            actions={singleActions}
            modal={false}
            open={this.state.togglevehicleCreate}
            onRequestClose={this.toggleCreatevehicle}
            autoScrollBodyContent={true}

          >
            <vehicleCreate
              buttonText={'Update vehicle'}
              onComplete={this.props.vehicleUpdate}
              simulateMenuClick={this.handleSinglevehicle}
              toggle={this.toggleCreatevehicle}
              vehicleUpdate={this.state.clickedMenuvehicle} />
          </Dialog>

        </Dialog>
        {/* ***** vehicle LIST IF THEY HAVE vehicleS ***** */}
        {
          this.props.user.allvehicles ?
            <vehicleList

              toggleSinglevehicleView={this.handleSinglevehicle} /> : undefined
        }
      </div >
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

let mapDispatchToProps = dispatch => ({

  vehicleCreate: (vehicle) => dispatch(vehicleCreateRequest(vehicle)),
  vehicleUpdate: (vehicle) => dispatch(vehicleUpdateRequest(vehicle)),

});

export default connect(mapStateToProps, mapDispatchToProps)(vehicleContainer);

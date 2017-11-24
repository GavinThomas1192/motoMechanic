import React from 'react';
import { connect } from 'react-redux';
import BikeCreate from '../bike-create';
import BikeList from '../bike-list'
import uuid from 'uuid/v1';
import AppBar from 'material-ui/AppBar';
import { bikeCreateRequest, bikeUpdateRequest, bikeDeleteRequest } from '../../action/auth-actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';



class BikeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleBikeCreate: false,
      noBikes: true,
      toggleSingleBike: false,
      clickedMenuBike: {},
    }
    this.toggleCreateBike = this.toggleCreateBike.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSingleBike = this.handleSingleBike.bind(this);


  }
  toggleCreateBike() {
    this.setState({ toggleBikeCreate: !this.state.toggleBikeCreate })
    console.log('togglin')
  }

  handleToggle() {

    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ noBikes: false, open: false, toggleSingleBike: false, toggleBikeCreate: false, });
  }

  handleSingleBike(clickedBike) {
    console.log('_CLICKED Bike-', clickedBike)
    this.setState({ clickedMenuBike: clickedBike, toggleSingleBike: true })
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
        onClick={this.toggleCreateBike}
      />,
    ];
    return (
      <div>
        {/* ***** POPUP IF NO EXISTING BIKES ***** */}
        {!this.props.user.allBikes ?
          <div>
            <Dialog
              title="It looks like you have no bikes! Lets change that."
              actions={actionsTwo}
              modal={false}
              open={this.state.noBikes}
              onRequestClose={this.handleClose}
            >
            </Dialog>
          </div>
          : undefined}
        {/* ***** CREATE NEW BIKE ***** */}
        <Dialog
          title="Input New bike"
          actions={actions}
          modal={false}
          open={this.state.toggleBikeCreate}
          onRequestClose={this.toggleCreateBike}
          autoScrollBodyContent={true}

        >
          <BikeCreate
            buttonText={'Submit'}
            onComplete={this.props.bikeCreate}
            toggle={this.toggleCreateBike} />
        </Dialog>
        {/* ***** BIKE LIST IF THEY HAVE BIKES ***** */}
        {this.props.user.allBikes ?
          <BikeList
            allBikes={this.props.user.allBikes} /> : undefined}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

let mapDispatchToProps = dispatch => ({

  bikeCreate: (bike) => dispatch(bikeCreateRequest(bike)),
  bikeUpdate: (bike) => dispatch(bikeUpdateRequest(bike)),

});

export default connect(mapStateToProps, mapDispatchToProps)(BikeContainer);
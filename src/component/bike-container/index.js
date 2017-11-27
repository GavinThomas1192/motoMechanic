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
    console.log('INSIDE BIKE COMP', this.props)
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

        {/* ***** SINGLE BIKE VIEW AFTER CLICKING FROM LIST***** */}
        <Dialog
          title="Bike Stats"
          actions={singleActions}
          modal={false}
          open={this.state.toggleSingleBike}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}

        >

          <div>
            <pre>
              <h2>{this.state.clickedMenuBike.make}</h2>
              <p>{this.state.clickedMenuBike.model}</p>
              <p>{this.state.clickedMenuBike.year}</p>
              <p>{this.state.clickedMenuBike.name}</p>
              <p>{this.state.clickedMenuBike.mileage}</p>
              <p>{this.state.clickedMenuBike.color}</p>

            </pre>
          </div>
          {/* ***** EDIT POPUP AFTER CLICKING MENU ITEM ***** */}
          <Dialog
            title="Update This Note"
            actions={singleActions}
            modal={false}
            open={this.state.toggleBikeCreate}
            onRequestClose={this.toggleCreateBike}
            autoScrollBodyContent={true}

          >
            <BikeCreate
              buttonText={'Update Bike'}
              onComplete={this.props.bikeUpdate}
              simulateMenuClick={this.handleSingleBike}
              toggle={this.toggleCreateBike}
              bikeUpdate={this.state.clickedMenuBike} />
          </Dialog>

        </Dialog>
        {/* ***** BIKE LIST IF THEY HAVE BIKES ***** */}
        {
          this.props.user.account.allBikes ?
            <BikeList
              allBikes={this.props.user.account.allBikes}
              toggleSingleBikeView={this.handleSingleBike} /> : undefined
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

  bikeCreate: (bike) => dispatch(bikeCreateRequest(bike)),
  bikeUpdate: (bike) => dispatch(bikeUpdateRequest(bike)),

});

export default connect(mapStateToProps, mapDispatchToProps)(BikeContainer);
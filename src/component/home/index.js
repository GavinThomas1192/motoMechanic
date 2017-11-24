import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Encyclopedia from '../encyclopedia'
import './_home.scss'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import NavBar from '../navbar'




class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    console.log('_THIS_DOT_PROPS_', this.props)
  }

  handleToggle() {

    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }


  render() {
    return (
      <div className=''>
        <h1>Hello from the home</h1>
        <h2>I have no idea what to put here</h2>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
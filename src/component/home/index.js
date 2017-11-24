import React from 'react';
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
      </div>
    );
  }
}

export default Home;

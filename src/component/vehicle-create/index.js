import { connect } from 'react-redux';
import React from 'react';
import { Button } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as utils from '../../lib/utils';


class vehicleCreate extends React.Component {
  constructor(props) {
    super(props);

    let name = props.vehicleUpdate ? props.vehicleUpdate.name : '';
    let make = props.vehicleUpdate ? props.vehicleUpdate.make : '';
    let model = props.vehicleUpdate ? props.vehicleUpdate.model : '';
    let year = props.vehicleUpdate ? props.vehicleUpdate.year : '';
    let type = props.vehicleUpdate ? props.vehicleUpdate.type : '';
    let color = props.vehicleUpdate ? props.vehicleUpdate.color : '';
    let mileage = props.vehicleUpdate ? props.vehicleUpdate.mileage : '';
    let vehicleAvatar = props.vehicleUpdate ? props.vehicleUpdate.vehicleAvatar : '';
    let preview = props.vehicleUpdate ? props.vehicleUpdate.preview : '';
    let id = props.vehicleUpdate ? props.vehicleUpdate.id : 1;

    this.state = {
      name,
      make,
      model,
      year,
      type,
      color,
      mileage,
      id,
      vehicleAvatar,
      preview,
      editing: false,
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (name === 'vehicleAvatar') {
      let { files } = e.target;
      let vehicleAvatar = files[0];
      this.setState({ vehicleAvatar });

      utils.photoToDataUrl(vehicleAvatar)
        .then(preview => this.setState({ preview }))
        .catch(console.error);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    {
      this.props.buttonText == 'Update vehicle' ?
        this.props.onComplete(this.state, this.props.vehicleUpdate.id)
        :

        this.props.onComplete(this.state);
    }
    this.setState = ({

    });
    this.props.toggle();
  }


  render() {
    return (
      <div>


        <form onSubmit={this.handleSubmit}>
          <div className='inputContainer'>
            <TextField
              hintText="Sally, White Dragon"
              floatingLabelText="Personlized Name"
              multiLine={false}
              rows={1}
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="Suzuki, Yamaha, Etc"
              floatingLabelText="Brand"
              multiLine={false}
              rows={1}
              name='make'
              type='text'
              value={this.state.make}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="GXSR1300, Hayabusa"
              floatingLabelText="Model"
              multiLine={false}
              rows={1}
              name='model'
              type='text'
              value={this.state.model}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="2007, 1998"
              floatingLabelText="Year"
              multiLine={false}
              rows={1}
              name='year'
              type='number'
              value={this.state.year}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="Naked, Cruiser"
              floatingLabelText="Type"
              multiLine={false}
              rows={1}
              name='type'
              type='text'
              value={this.state.type}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="Flaming Red Dragons"
              floatingLabelText="Color"
              multiLine={false}
              rows={1}
              name='color'
              type='text'
              value={this.state.color}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="12,000"
              floatingLabelText="Mileage"
              multiLine={false}
              rows={1}
              name='mileage'
              type='number'
              value={this.state.mileage}
              onChange={this.handleChange}
            /><br />

            <h3>Upload a photo</h3>
            <img src={this.state.preview} style={{ 'width': '25%' }} />
            <TextField

              multiLine={false}
              rows={1}
              name='vehicleAvatar'
              type='file'
              value={this.state.vehicleAvatar}
              onChange={this.handleChange}
            /><br />

          </div>
          <div className='inputContainer'>

          </div>
          <div className='buttonContainer'>

            <RaisedButton label={this.props.buttonText} primary={true} type='submit' />
          </div>
        </form>
      </div >
    );
  }
}


let mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

let mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(vehicleCreate);

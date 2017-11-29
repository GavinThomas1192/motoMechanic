import { connect } from 'react-redux';
import React from 'react';
import { Button } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as utils from '../../lib/utils';


class RepairCreate extends React.Component {
  constructor(props) {
    super(props);

    let name = props.repairUpdate ? props.repairUpdate.name : '';
    let mileage = props.bikeUpdate ? props.repairUpdate.mileage : '';
    let cost = props.materialCost? props.repairUpdate.cost : '';
    let repairPic = props.materialCost? props.repairUpdate.cost : '';



    this.state = {
      name,
      mileage,
      cost,
      repairPic,
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
    if (name === 'repairPic') {
      let { files } = e.target;
      let bikePic = files[0];
      this.setState({ bikePic });

      utils.photoToDataUrl(repairPic)
        .then(preview => this.setState({ preview }))
        .catch(console.error);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    {
      this.props.buttonText == 'Add a Repair' ?
        this.props.onComplete(this.state, this.props.repairUpdate.id)
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
              hintText="What kind of repair did you complete?"
              floatingLabelText="Repair Name"
              multiLine={false}
              rows={1}
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="3,000"
              floatingLabelText="Mileage Repair Completed"
              multiLine={false}
              rows={1}
              name='mileage'
              type='number'
              value={this.state.make}
              onChange={this.handleChange}
            /><br />
            <TextField
              hintText="How much did you spend on this repair?"
              floatingLabelText="Cost"
              multiLine={false}
              rows={1}
              name='cost'
              type='number'
              value={this.state.model}
              onChange={this.handleChange}
            /><br />

            <h3>Upload a photo</h3>
            <img src={this.state.preview} style={{ 'width': '25%' }} />
            <TextField
              multiLine={false}
              rows={1}
              name='repairPic'
              type='file'
              value={this.state.bikeAvatar}
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


export default connect(mapStateToProps, mapDispatchToProps)(RepairCreate);

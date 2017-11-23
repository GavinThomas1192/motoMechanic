import React from 'react';
import Bike from '../components/bike';


class BikeContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from the bike container</h1>
        <Bike bike={this.props.bike} />
      </div>
    );
  }
}

export default BikeContainer;

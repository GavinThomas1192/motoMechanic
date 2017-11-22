import React from 'react';
import Bike from '../components/bike';


class BikeContainer extends React.Component {
  render() {
    return (
      <div>
        <Bike bike={this.props.bike} />
      </div>
    );
  }
}

export default BikeContainer;

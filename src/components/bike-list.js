import React from 'react';

import BikeContainer from '../containers/bike-container';


class BikeList extends React.Component {


  genBikeContainers() {
    return this.props.bikes.map((bike, index) => {
      return <BikeContainer key={bike.model + index} bike={bike} />;
    });
  }


  render() {
    return (
      <div>
        {this.genBikeContainers()}
      </div>
    );
  }
}

export default BikeList;

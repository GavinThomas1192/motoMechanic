import React from 'react';

import BikeContainer from '../bike-container';


class BikeList extends React.Component {


  genBikeContainers() {
    return this.props.bikes.map((bike, index) => {
      return <BikeContainer key={bike.model + index} bike={bike} />;
    });
  }


  render() {
    return (
      <div>
        <h1>Hello from the bike list component</h1>
        {this.genBikeContainers()}
      </div>
    );
  }
}

export default BikeList;

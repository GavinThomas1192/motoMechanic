import React from 'react';

class Bike extends React.Component {
  render() {
    return (
      <div>
        <div className="pics" style={{backgroundImage: `url(${this.props.bike.pic})`}}/>
        <h3>{this.props.bike.make} | {this.props.bike.model}</h3>
        <h5>${this.props.bike.msrp} | {this.props.bike.cc}cc | {this.props.bike.engine}</h5>
        <a href={this.props.bike.link}><h7>More...</h7></a>
      </div>
    );
  }
}

export default Bike;

import React from 'react';
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';






class BikeList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <h1>Hello from the bike list component</h1>

        <List>

          {this.props.user.allBikes.map(ele => {
            return <ListItem onClick={() => this.props.toggleSingleBikeView(ele)} key={ele.mileage} primaryText={ele.name} />
          })}
        </List>

      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BikeList);

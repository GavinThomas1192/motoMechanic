import React from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';






class BikeList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Hello from the bike list component</h1>
        <List>
          {this.props.allBikes.map(ele => {
            return <ListItem key={mileage} primaryText={ele.name} />
          })}
        </List>

      </div>
    );
  }
}

export default BikeList;

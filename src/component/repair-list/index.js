import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';






class RepairList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <h1>Hello from the repair log</h1>

        <List>

          {this.props.user.allRepairs.map(ele => {
            return <ListItem onClick={() => this.props.toggleSingleRepairView(ele)} key={ele.mileage} primaryText={ele.cost} />
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

  repairCreate: (repair) => dispatch(RepairCreateRequest(repair)),
  repairUpdate: (repair) => dispatch(RepairUpdateRequest(repair)),

});

export default connect(mapStateToProps, mapDispatchToProps)(RepairList);

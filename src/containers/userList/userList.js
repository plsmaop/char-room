import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import '../../style/style.css';

class UserList extends Component {
  render() {
    const { userList, chat } = this.props;
    return (
      <div className="userlist" >
        <div className="user-number container">{userList.length}人在線</div>
        <Divider />
        <List>
          {
            userList.map(user => (<ListItem
              primaryText={user.name}
              key={user.id}
              containerElement="div"
              className="container"
              onClick={() => chat(user.name, user.id)}/>))
          }
        </List>
      </div>
    );
  }
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(String).isRequired,
  chat: PropTypes.func.isRequired,
};

export default UserList;

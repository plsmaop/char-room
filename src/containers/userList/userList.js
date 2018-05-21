import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import '../../style/style.css';

const style = {
  maxHeight: 372,
  height: 372,
  overflow: 'auto',
};


class UserList extends Component {
  render() {
    const { userList, chat } = this.props;
    return (
      <div className="col-3 userlist" >
        <Paper zDepth={2} >
          <Paper style={style} zDepth={1}>
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
          </Paper>
        </Paper>
      </div>
    );
  }
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(String).isRequired,
  chat: PropTypes.func.isRequired,
};

export default UserList;

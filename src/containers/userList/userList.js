import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import '../../style/style.css';

const style = {
  maxHeight: 378,
  height: 378,
  overflow: 'auto',
};


class UserList extends Component {
  render() {
    const { userList } = this.props;
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
                  onClick={() => console.log(user)}/>))
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
};

export default UserList;

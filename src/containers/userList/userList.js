import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from 'material-ui/Divider';
import { ChatList,
  ChatListItem,
  Row,
  Column,
  Title,
  Subtitle,
  Avatar
} from '@livechat/ui-kit';
import '../../style/style.css';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

class UserList extends Component {
  render() {
    const { userList, chat, classes } = this.props;
    return (
      <div className="userlist" >
        <div className="user-number">{userList.length-1}人在線</div>
        <Divider />
        <ChatList style={{ maxWidth: '100%' }}>
          {
            userList.map(user => (<ChatListItem
              onClick={() => chat(user.name, user.id)}
              key={user.id}
              >
              <Avatar imgUrl="https://use.fontawesome.com/releases/v5.0.13/svgs/brands/reddit-alien.svg" />
              <Column fill>
                <Row justify>
                  <Title ellipsis>{user.name}</Title>
                </Row>
                <Subtitle ellipsis style={{ textAlign: 'left' }}>
                  {
                    (typeof this.props.newMsgList[user.id] === 'undefined') ?
                      '沒有新訊息' :
                      `新訊息：${this.props.newMsgList[user.id]}`
                  }
                </Subtitle>
              </Column>
            </ChatListItem>))
          }
        </ChatList>
      </div>
    );
  }
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(String).isRequired,
  newMsgList: PropTypes.object.isRequired,
  chat: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);

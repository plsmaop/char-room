import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import {
  ChatList,
  ChatListItem,
  Row,
  Column,
  Title,
  Subtitle,
  Avatar,
} from '@livechat/ui-kit';
import '../../style/style.css';

const UserList = ({ userList, chat, newMsgList }) => (
  <div className="userlist" >
    <div className="user-number">{userList.length - 1}人在線</div>
    <Divider />
    <ChatList style={{ maxWidth: '100%' }}>
      {
        userList.map(user => (
          <ChatListItem
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
                  (typeof newMsgList[user.id] === 'undefined') ?
                    '沒有新訊息' : `新訊息：${newMsgList[user.id]}`
                }
              </Subtitle>
            </Column>
          </ChatListItem>))
      }
    </ChatList>
  </div>
);

UserList.propTypes = {
  userList: PropTypes.arrayOf(String).isRequired,
  newMsgList: PropTypes.objectOf(String).isRequired,
  chat: PropTypes.func.isRequired,
};

export default UserList;

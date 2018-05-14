import React from 'react';
import UserList from '../containers/userList';
import ChatHistory from '../containers/chatHistory';
import EnterMsg from '../containers/enterMsg';

export default () => (
  <div className="container col-md-7">
    <UserList />
    <ChatHistory />
    <EnterMsg />
  </div>
);

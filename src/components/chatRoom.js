import React from 'react';
import UserList from '../containers/userList';
import Chat from '../containers/chat';
import '../style/style.css';

export default () => (
  <div className="container col-12 col-md-12 mx-auto chatroom">
    <div className="row">
      <UserList />
      <Chat />
    </div>
  </div>
);

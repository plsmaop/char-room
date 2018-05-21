import React from 'react';
import Paper from 'material-ui/Paper';
import '../../style/style.css';
import EnterMsg from '../enterMsg';
import ChatHistory from '../chatHistory';

const Chat = () => (
  <div className="chat" >
    <Paper zDepth={2} >
      <ChatHistory />
      <EnterMsg />
    </Paper>
  </div>
);

export default Chat;

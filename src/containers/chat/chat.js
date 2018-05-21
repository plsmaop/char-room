import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import '../../style/style.css';
import EnterMsg from '../enterMsg';
import ChatHistory from '../chatHistory';

const style = {
  textAlign: 'center',
};

class Chat extends Component {
  render() {
    return (
      <div className="chat" >
        <Paper  zDepth={2} >
          <ChatHistory />
          <EnterMsg />
        </Paper>
      </div>
    );
  }
}

Chat.propTypes = {

};

export default Chat;

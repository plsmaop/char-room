import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import '../../style/style.css';
import EnterMsg from '../enterMsg';
import ChatContent from '../chatContent';

const style = {
  textAlign: 'center',
};

class Chat extends Component {
  render() {
    return (
      <div className="col-9 chat" >
        <Paper  zDepth={2} >
          <ChatContent />
          <EnterMsg />
        </Paper>
      </div>
    );
  }
}

Chat.propTypes = {

};

export default Chat;

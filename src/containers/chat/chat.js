import React from 'react';
import Paper from 'material-ui/Paper';
import '../../style/style.css';
import EnterMsg from '../enterMsg';
import ChatHistory from '../chatHistory';

class Chat extends React.Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.messagesEnd.scrollIntoView();
  }
  render() {
    return (
      <div className="chat" >
        <Paper zDepth={2} >
          <ChatHistory />
          <EnterMsg />
        </Paper>
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={(el) => { this.messagesEnd = el; }}
        />
      </div>
    );
  }
}

export default Chat;

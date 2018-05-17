import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  maxHeight: 300,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

class ChatContent extends React.Component {
  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} />
      </div>
    );
  }
}

export default ChatContent;

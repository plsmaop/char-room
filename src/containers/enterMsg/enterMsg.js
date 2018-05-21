import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import '../../style/style.css';

const style = {
  width: '100%',
  marginBottom: '0',
};

class EnterMsg extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) { this.props.updateInputMsg(e.target.value); }
  handleKeyPress(e) {
    if (e.key === 'Enter' && this.props.msg.trim().length > 0) this.props.sendMsg();
  }
  render() {
    return (
      <div className="container entermsg" >

          <TextField
            floatingLabelText="請輸入訊息"
            value={this.props.msg}
            style={style}
            onChange={e => this.handleChange(e)}
            onKeyPress={e => this.handleKeyPress(e)}
          />

      </div>
    );
  }
}

EnterMsg.propTypes = {
  msg: PropTypes.string.isRequired,
  updateInputMsg: PropTypes.func.isRequired,
  sendMsg: PropTypes.func.isRequired,
};

export default EnterMsg;

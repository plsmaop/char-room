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
  render() {
    return (
      <div className="container entermsg" >

          <TextField
            floatingLabelText="請輸入訊息"
            style={style}
          />

      </div>
    );
  }
}

EnterMsg.propTypes = {

};

export default EnterMsg;

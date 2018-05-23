import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../style/style.css';

const style = {
  color: 'white',
  borderColor: '#3f51b5',
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class AddUser extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.createSocket();
    this.props.getUserList();
  }
  handleChange(e) { this.props.updateName(e.target.value.trim()); }
  handleKeyPress(e) {
    const { name, userList, addUser } = this.props;
    if (e.key === 'Enter' && name.length > 0) {
      if (userList.filter(user => user.name === name).length > 0)
        alert('你取的暱稱已經有人取了，請換一個');
      else addUser();
    }
  }
  handleClick() {
    const { name, userList, addUser } = this.props;
    if (name.length > 0) {
      if (userList.filter(user => user.name === name).length > 0)
        alert('你取的暱稱已經有人取了，請換一個');
      else addUser();
    }
  }
  render() {
    const { name, classes } = this.props;
    const { handleChange, handleKeyPress, handleClick } = this;
    return (
      <div className="container col-md-5 adduser">
        <h2 style={{ color: 'white' }}>歡迎來到匿名交友聊天室</h2>
        <div>
          <TextField
            value={name}
            floatingLabelText="請輸入暱稱開始聊天"
            onChange={e => handleChange(e)}
            underlineFocusStyle={style}
            floatingLabelShrinkStyle={{ color: 'white' }}
            floatingLabelFocusStyle={style}
            floatingLabelStyle={style}
            inputStyle={{ color: 'white' }}
            onKeyPress={e => handleKeyPress(e)}
          />
        </div>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={handleClick}
        >
          送出
        </Button>
      </div>
    );
  }
}

AddUser.propTypes = {
  name: PropTypes.string.isRequired,
  userList: PropTypes.arrayOf(String).isRequired,
  updateName: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  createSocket: PropTypes.func.isRequired,
  getUserList: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddUser);

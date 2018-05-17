import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import '../../style/style.css';

class AddUser extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    this.props.createSocket();
    this.props.getUserList();
  }
  handleChange(e) { this.props.updateName(e.target.value.trim()); }
  handleKeyPress(e) {
    const { name, userList, addUser } = this.props;
    if (e.key === 'Enter' && name.trim()) {
      if (userList.includes(name)) alert('你取的暱稱已經有人取了，請換一個');
      else addUser();
    }
  }
  render() {
    const { name } = this.props;
    const { handleChange } = this;
    return (
      <div className="container col-md-5 adduser">
        <TextField
          hintText={name}
          floatingLabelText="請輸入暱稱"
          onChange={e => handleChange(e)}
          onKeyPress={e => this.handleKeyPress(e)}
        />
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
};

export default AddUser;

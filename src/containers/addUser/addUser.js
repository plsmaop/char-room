import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import './addUser.css';

class AddUser extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() { this.props.createSocket(); }
  handleChange(e) { this.props.updateName(e.target.value.trim()); }
  handleKeyPress(e) {
    if (e.key === 'Enter' && this.props.name.trim()) {
      this.props.addUser();
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
  updateName: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  createSocket: PropTypes.func.isRequired,
};

export default AddUser;

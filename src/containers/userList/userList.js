import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
  componentDidMount() {
    this.props.createSocket();
  }
  render() {
    return (
      <div className="container" />
    );
  }
}

UserList.propTypes = {
  createSocket: PropTypes.func.isRequired,
};

export default UserList;

import { connect } from 'react-redux';
import UserList from './userList';

const mapStateToProps = state => ({
  userList: state.userModule.userList,
});

export default connect(mapStateToProps, null)(UserList);

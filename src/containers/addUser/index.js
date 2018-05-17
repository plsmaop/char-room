import { connect } from 'react-redux';
import { actions as userActions } from '../../redux/userModule';
import AddUser from './addUser';

const mapStateToProps = state => ({
  name: state.userModule.name,
  userList: state.userModule.userList,
});

const {
  createSocket, updateName,
  addUser, getUserList,
} = userActions;

export default connect(mapStateToProps, {
  updateName, addUser, createSocket, getUserList,
})(AddUser);

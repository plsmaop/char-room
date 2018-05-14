import { connect } from 'react-redux';
import { actions as userActions } from '../../redux/userModule';
import AddUser from './addUser';

const mapStateToProps = state => ({
  name: state.userModule.name,
});

const { createSocket, updateName, addUser } = userActions;

export default connect(mapStateToProps, { updateName, addUser, createSocket })(AddUser);

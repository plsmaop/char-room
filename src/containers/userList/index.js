import { connect } from 'react-redux';
import UserList from './userList';
import { actions } from '../../redux/socketModule';

const { createSocket } = actions;

export default connect(null, { createSocket })(UserList);

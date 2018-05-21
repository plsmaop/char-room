import { connect } from 'react-redux';
import UserList from './userList';
import { actions } from '../../redux/chatModule';

const mapStateToProps = state => ({
  userList: state.userModule.userList,
  newMsgList: state.chatModule.newMsgList,
});

const { chat } = actions;

export default connect(mapStateToProps, { chat })(UserList);

import { connect } from 'react-redux';
import { actions } from '../../redux/chatModule';
import ChatRoom from './chatRoom';

const { startListen } = actions;
const mapStateToProps = state => ({
  name: state.userModule.name,
  targetName: state.chatModule.targetName,
});

export default connect(mapStateToProps, { startListen })(ChatRoom);

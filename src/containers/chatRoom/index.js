import { connect } from 'react-redux';
import { actions } from '../../redux/chatModule';
import ChatRoom from './chatRoom';

const { startListen } = actions;
const mapStateToProps = state => ({
  targetName: state.chatModule.targetName,
});

export default connect(mapStateToProps, { startListen })(ChatRoom);

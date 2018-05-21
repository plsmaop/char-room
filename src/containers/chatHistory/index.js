import { connect } from 'react-redux';
import ChatHistory from './chatHistory';

const mapStateToProps = state => ({
  name: state.userModule.name,
  targetName: state.chatModule.targetName,
  targetId: state.chatModule.targetId,
  chatHistory: state.chatModule.chatHistory,
});

export default connect(mapStateToProps, null)(ChatHistory);

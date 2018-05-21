import { connect } from 'react-redux';
import EnterMsg from './enterMsg';
import { actions } from '../../redux/chatModule';

const { updateInputMsg, sendMsg } = actions;

const mapStateToProps = state => ({
  msg: state.chatModule.msg,
});

export default connect(mapStateToProps, { updateInputMsg, sendMsg })(EnterMsg);

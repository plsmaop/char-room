import { socket } from './api';

// actions
export const types = {
  CHAT: 'CHAT',
  LOAD_CHAT_HISTORY: 'LOAD_CHAT_HISTORY',
  SEND_MSG: 'SEND_MSG',
  UPDATE_INPUT_MSG: 'UPDATE_INPUT_MSG',
  UPDATE_CHAT_HISTORY: 'UPDATE_CHAT_HISTORY',
  START_LISTEN: 'START_LISTEN',
  RECEIVE_NEW_MSG: 'RECEIVE_NEW_MSG',
};

// action creators

export const actions = {
  chat: (targetName, targetId) => ({
    type: types.CHAT,
    targetId,
    targetName,
  }),
  loadChatHistory: chatHistory => ({
    type: types.LOAD_CHAT_HISTORY,
    chatHistory,
  }),
  updateInputMsg: msg => ({
    type: types.UPDATE_INPUT_MSG,
    msg,
  }),
  sendMsg: () => ({
    type: types.SEND_MSG,
  }),
  updateChatHistory: msgPacket => ({
    type: types.UPDATE_CHAT_HISTORY,
    msgPacket,
  }),
  receiveNewMsg: msgPacket => ({
    type: types.RECEIVE_NEW_MSG,
    msgPacket,
  }),
  startListen: () => ({
    type: types.START_LISTEN,
  }),
};

// initial state
const initialState = {
  targetId: '',
  targetName: '',
  chatHistory: [],
  msg: '',
  newMsgList: {},
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHAT: {
      const msgList = { ...state.newMsgList };
      msgList[action.targetId] = undefined;
      return {
        ...state,
        targetId: action.targetId,
        targetName: action.targetName,
        newMsgList: msgList,
      };
    }
    case types.LOAD_CHAT_HISTORY:
      return {
        ...state,
        chatHistory: action.chatHistory,
      };
    case types.UPDATE_INPUT_MSG:
      return {
        ...state,
        msg: action.msg,
      };
    case types.SEND_MSG: {
      // const msgPacket
      return {
        ...state,
        // chatHistory: state.chatHistory.concat([state.msg]),
        msg: state.msg.slice(9999),
      };
    }
    case types.UPDATE_CHAT_HISTORY:
      return {
        ...state,
        chatHistory: state.chatHistory.concat([action.msgPacket]),
      };
    case types.RECEIVE_NEW_MSG: {
      const { from, msg } = action.msgPacket;
      const msgList = { ...state.newMsgList };
      msgList[from] = msg;
      return {
        ...state,
        newMsgList: msgList,
      };
    }
    default:
      return state;
  }
};

export const chatMiddleware = store => next => (action) => {
  const { id } = store.getState().userModule;
  const { msg } = store.getState().chatModule;
  const result = next(action);
  switch (action.type) {
    case types.START_LISTEN:
      console.log('start listen');
      setInterval(() => socket.pong(), 10000);

      socket.socket.on('load chat history', chatHistory =>
        store.dispatch(actions.loadChatHistory(chatHistory)));
      socket.socket.on('msg', (msgPacket) => {
        const { from } = msgPacket;
        const { targetId } = store.getState().chatModule;
        if (from === id || from === targetId) store.dispatch(actions.updateChatHistory(msgPacket));
        else store.dispatch(actions.receiveNewMsg(msgPacket));
      });
      break;
    case types.CHAT:
      document.title = action.targetName;
      // store.dispatch(actions.updateChatHistory([]));
      socket.createChatRoom(id, action.targetId);
      break;
    case types.SEND_MSG: {
      const { targetId } = store.getState().chatModule;
      if (targetId.length > 0) socket.emitMsg(id, targetId, msg);
      break;
    }
    default:
      break;
  }
  return result;
};

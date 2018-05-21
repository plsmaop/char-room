import { socket } from './api';

// actions
export const types = {
  CHAT: 'CHAT',
  LOAD_CHAT_HISTORY: 'LOAD_CHAT_HISTORY',
  SEND_MSG: 'SEND_MSG',
  UPDATE_INPUT_MSG: 'UPDATE_INPUT_MSG',
  UPDATE_CHAT_HISTORY: 'UPDATE_CHAT_HISTORY',
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
};

// initial state
const initialState = {
  targetId: '',
  targetName: '',
  chatHistory: [],
  msg: '',
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHAT:
      return {
        ...state,
        targetId: action.targetId,
        targetName: action.targetName,
      };
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
    default:
      return state;
  }
};

export const chatMiddleware = store => next => (action) => {
  const { id } = store.getState().userModule;
  const { msg } = store.getState().chatModule;
  const result = next(action);
  switch (action.type) {
    case types.CHAT:
      socket.createChatRoom(id, action.targetId);
      socket.socket.removeListener('load chat history');
      socket.socket.removeListener('msg');
      store.dispatch(actions.updateChatHistory([]));
      socket.socket.on('load chat history', chatHistory =>
        store.dispatch(actions.loadChatHistory(chatHistory)));
      socket.socket.on('msg', (msgPacket) => {
        const { from } = msgPacket;
        console.log(msgPacket);
        const { targetId } = store.getState().chatModule;
        if (from === id || from === targetId) store.dispatch(actions.updateChatHistory(msgPacket));
      });
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

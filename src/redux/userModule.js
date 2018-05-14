import { socket } from './api';

// actions
export const types = {
  CREATE_SOCKET: 'CREATE_SOCKET',
  UPDATE_NAME: 'UPDATE_NAME',
  ADD_USER: 'ADD_USER',
};

// action creators
export const actions = {
  createSocket: () => {
    socket.createSocket();
    return { type: types.CREATE_SOCKET };
  },
  updateName: (name) => {
    socket.setUserName(name);
    return {
      type: types.UPDATE_NAME,
      name,
    };
  },
  addUser: () => {
    socket.emitUserName();
    return { type: types.ADD_USER };
  },
};

const initialState = {
  name: '',
  userList: [],
  isReadyToChat: false,
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CREATE_SOCKET:
      return {
        ...state,
        socket: action.socket,
      };
    case types.UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case types.ADD_USER:
      return {
        ...state,
        isReadyToChat: !state.isReadyToChat,
      };
    default:
      return state;
  }
};

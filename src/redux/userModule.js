import { socket } from './api';

// actions
export const types = {
  CREATE_SOCKET: 'CREATE_SOCKET',
  UPDATE_NAME: 'UPDATE_NAME',
  ADD_USER: 'ADD_USER',
  UPDATE_USER_LIST: 'UPDATE_USER_LIST',
};

// action creators
export const actions = {
  createSocket: () => ({ type: types.CREATE_SOCKET }),
  updateName: name => ({
    type: types.UPDATE_NAME,
    name,
  }),
  addUser: () => ({ type: types.ADD_USER }),
  updateUserList: userList => ({
    type: types.UPDATE_USER_LIST,
    userList,
  }),
  getUserList: () => dispatch =>
    socket.socket.on('user list', (packet) => {
      dispatch(actions.updateUserList(packet));
    }),
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
      return state;
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
    case types.UPDATE_USER_LIST:
      return {
        ...state,
        userList: action.userList.filter(user => user.name !== state.name),
      };
    default:
      return state;
  }
};

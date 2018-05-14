import APIs from './api';

// actions
export const types = {
  CREATE_SOCKET: 'CREATE_SOCKET',
};

// actions creaters
export const actions = {
  createSocket: () => ({
    type: types.CREATE_SOCKET,
    socket: APIs.createSocket(),
  }),
};

const initialState = {
  socket: undefined,
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CREATE_SOCKET:
      return {
        ...state,
        socket: action.socket,
      };
    default:
      return state;
  }
};

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.';
import { types } from './userModule';
import { socket } from './api';


const socketMiddleware = store => next => (action) => {
  const result = next(action);

  switch (action.type) {
    case types.CREATE_SOCKET:
      socket.createSocket();
      break;
    case types.ADD_USER: {
      const { name } = store.getState().userModule;
      socket.emitUserName(name);
      break;
    }
    default:
      break;
  }
  return result;
};


/*eslint-disable */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(socketMiddleware, thunk),
);
store.subscribe(() => console.log(store.getState()));
/*eslint-disable */

export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.';
import { userMiddleware } from './userModule';
import { chatMiddleware } from './chatModule';

/*eslint-disable */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(userMiddleware, chatMiddleware, thunk),
);
store.subscribe(() => console.log(store.getState()));
/*eslint-disable */

export default store;

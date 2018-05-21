import { combineReducers } from 'redux';
import userModule from './userModule';
import chatModule from './chatModule';

export default combineReducers({
  userModule,
  chatModule,
});

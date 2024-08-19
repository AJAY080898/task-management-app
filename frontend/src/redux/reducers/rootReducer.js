import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  notifications: notificationReducer,

});

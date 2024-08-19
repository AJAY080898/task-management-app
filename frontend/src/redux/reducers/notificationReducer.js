import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../types';

const initialState = {
  message: '',
  type: '',  // success, danger, warning, etc.
  visible: false,
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        visible: true,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        message: '',
        type: '',
        visible: false,
      };
    default:
      return state;
  }
}

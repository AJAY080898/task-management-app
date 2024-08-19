import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../types';

export const showNotification = (message, type) => dispatch => {
  dispatch({
    type: SHOW_NOTIFICATION,
    payload: { message, type }
  });

  setTimeout(() => {
    dispatch({ type: HIDE_NOTIFICATION });
  }, 3000); // Notification visible for 3 seconds
};

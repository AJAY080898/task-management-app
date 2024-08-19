import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { HIDE_NOTIFICATION } from '../../redux/types';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notifications);

  if (!notification.visible) {
    return null;
  }

  const handleClose = () => {
    dispatch({ type: HIDE_NOTIFICATION });
  };

  return (
    <Alert variant={notification.type} onClose={handleClose} dismissible>
      {notification.message}
    </Alert>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  visible: PropTypes.bool,
};

export default Notification;

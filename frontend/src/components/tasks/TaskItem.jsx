import PropTypes from 'prop-types'; // Importing PropTypes for validation
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatus } from '../../redux/actions/taskActions';
import { Card, Button } from 'react-bootstrap';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  const handleStatusChange = (status) => {
    dispatch(updateTaskStatus(task._id, status));
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Due: {task.dueDate}</small>
        </Card.Text>
        <Card.Text>
          <small>Status: {task.status}</small>
        </Card.Text>
        <Button
          variant="outline-info"
          size="sm"
          className="me-2"
          onClick={() => handleStatusChange('in progress')}
        >
          <i className="fas fa-spinner"></i> In Progress
        </Button>
        <Button
          variant="outline-success"
          size="sm"
          className="me-2"
          onClick={() => handleStatusChange('completed')}
        >
          <i className="fas fa-check"></i> Completed
        </Button>
        <Button variant="outline-danger" size="sm" onClick={handleDelete}>
          <i className="fas fa-trash"></i> Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

// Adding PropTypes validation
TaskItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;

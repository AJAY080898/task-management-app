import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/actions/taskActions';
import TaskItem from './TaskItem';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-between align-items-center mt-4 mb-2">
          <h2>Your Tasks</h2>
          <Button variant="primary" href="/task/new">
            <i className="fas fa-plus"></i> Add New Task
          </Button>
        </Col>
      </Row>
      <Row>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <Col md={6} lg={4} key={task._id}>
              <TaskItem task={task} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No tasks available.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TaskList;

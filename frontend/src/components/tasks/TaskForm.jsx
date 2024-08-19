import PropTypes from 'prop-types'; // Importing PropTypes for validation
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createTask, updateTask } from '../../redux/actions/taskActions';
import { Container, Button, Form as BootstrapForm } from 'react-bootstrap';

const TaskForm = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <h3 className="text-center mb-4">{task ? 'Edit Task' : 'Create Task'}</h3>
      <Formik
        initialValues={{
          title: task ? task.title : '',
          description: task ? task.description : '',
          dueDate: task ? task.dueDate : '',
        }}
        validationSchema={Yup.object({
          title: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
          dueDate: Yup.date().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (task) {
            dispatch(updateTask(task._id, values));
          } else {
            dispatch(createTask(values));
          }
          setSubmitting(false);
        }}
      >
        <Form>
          <BootstrapForm.Group>
            <BootstrapForm.Label>Title</BootstrapForm.Label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group>
            <BootstrapForm.Label>Description</BootstrapForm.Label>
            <Field name="description" type="text" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <BootstrapForm.Group>
            <BootstrapForm.Label>Due Date</BootstrapForm.Label>
            <Field name="dueDate" type="date" className="form-control" />
            <ErrorMessage name="dueDate" component="div" className="text-danger" />
          </BootstrapForm.Group>

          <Button type="submit" variant="primary" className="w-100 mt-3">
            {task ? 'Update Task' : 'Create Task'}
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

// Adding PropTypes validation
TaskForm.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    _id: PropTypes.string,
  }),
};

export default TaskForm;

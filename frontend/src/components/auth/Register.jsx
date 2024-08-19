import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form as BootstrapForm } from 'react-bootstrap';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6} lg={4}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">
                <i className="fas fa-user-plus"></i> Register
              </h3>
              <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={Yup.object({
                  name: Yup.string().required('Required'),
                  email: Yup.string().email('Invalid email address').required('Required'),
                  password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(register(values, navigate));
                  setSubmitting(false);
                }}
              >
                <Form>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label>
                      <i className="fas fa-user"></i> Name
                    </BootstrapForm.Label>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" component="div" className="text-danger small" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group className="mt-3">
                    <BootstrapForm.Label>
                      <i className="fas fa-envelope"></i> Email
                    </BootstrapForm.Label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger small" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group className="mt-3">
                    <BootstrapForm.Label>
                      <i className="fas fa-lock"></i> Password
                    </BootstrapForm.Label>
                    <Field name="password" type="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger small" />
                  </BootstrapForm.Group>

                  <Button type="submit" variant="primary" className="w-100 mt-4">
                    <i className="fas fa-user-plus"></i> Register
                  </Button>
                </Form>
              </Formik>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

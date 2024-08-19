import PropTypes from 'prop-types';  // Import PropTypes for validation
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

// Add PropTypes validation for children and other props
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,  // 'children' is expected to be a React node
  rest: PropTypes.any,                  // Other props passed to the Route component
};

export default PrivateRoute;

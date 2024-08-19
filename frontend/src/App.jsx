import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TaskList from './components/tasks/TaskList';
import Notification from './components/notifications/Notification';
import TaskForm from './components/tasks/TaskForm';
import PrivateRoute from './components/common/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Header />
      <Notification />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<PrivateRoute><TaskList /></PrivateRoute>} />
        <Route path="/task/new" element={<PrivateRoute><TaskForm /></PrivateRoute>} />
        <Route path="/task/:id/edit" element={<PrivateRoute><TaskForm /></PrivateRoute>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

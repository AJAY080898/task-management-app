import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';

export const login = (userData, navigate) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate('/tasks');
  } catch (err) {
    console.error(err);
  }
};

export const register = (userData, navigate) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    navigate('/tasks');
  } catch (err) {
    console.error(err);
  }
};

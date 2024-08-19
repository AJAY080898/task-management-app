import axios from 'axios';
import { FETCH_TASKS, CREATE_TASK, DELETE_TASK, UPDATE_TASK } from '../types';

export const fetchTasks = () => async dispatch => {
  try {
    const res = await axios.get('/api/tasks');
    dispatch({ type: FETCH_TASKS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const createTask = (taskData) => async dispatch => {
  try {
    const res = await axios.post('/api/tasks', taskData);
    dispatch({ type: CREATE_TASK, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteTask = (taskId) => async dispatch => {
  try {
    await axios.delete(`/api/tasks/${taskId}`);
    dispatch({ type: DELETE_TASK, payload: taskId });
  } catch (err) {
    console.error(err);
  }
};

export const updateTask = (taskId, taskData) => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/${taskId}`, taskData);
    dispatch({ type: UPDATE_TASK, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const updateTaskStatus = (taskId, status) => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/${taskId}`, { status });
    dispatch({ type: UPDATE_TASK, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

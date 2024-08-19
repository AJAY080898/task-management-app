import { FETCH_TASKS, CREATE_TASK, DELETE_TASK, UPDATE_TASK } from '../types';

const initialState = {
  tasks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, tasks: action.payload };
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    default:
      return state;
  }
}

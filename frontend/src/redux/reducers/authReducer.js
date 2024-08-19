import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return { ...state, user: action.payload, token: action.payload.token };
    default:
      return state;
  }
}

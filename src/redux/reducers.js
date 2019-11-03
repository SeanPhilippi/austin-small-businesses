import { TYPES } from './actions';

const initialState = {
  isAuthenticated: true,
  username: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CURRENT_USER: return {
      ...state,
      user: payload
    };
    case TYPES.LOG_OUT_USER: return {
      ...state,
      isAuthenticated: false
    }
    default: return state;
  }
};
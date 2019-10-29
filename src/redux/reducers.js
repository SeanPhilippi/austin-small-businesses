import { TYPES } from './actions';

const initialState = {
  isAuthenticated: false,
  username: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CURRENT_USER: return {
      ...state,
      user: payload
    };
    default: return state;
  }
};
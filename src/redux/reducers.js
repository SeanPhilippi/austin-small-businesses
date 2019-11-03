import { TYPES } from './actions';

const initialState = {
  isAuthenticated: true,
  username: '',
  errors: {
    login: {},
    register: {}
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CURRENT_USER: return {
      ...state,
      isAuthenticated: payload.bool,
      user: payload.user
    };
    default: return state;
  };
};
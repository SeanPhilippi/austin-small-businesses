import { TYPES } from './actions';

const initialState = {
  isAuthenticated: true,
  user: {
    username: '',
    password: ''
  },
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
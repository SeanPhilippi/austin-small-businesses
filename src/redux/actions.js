export const TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  LOG_OUT_USER: 'LOG_OUT_USER',
};

export const setCurrentUser = user => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user // user object
});

export const logOutUser = () => ({
  type: TYPES.LOG_OUT_USER,
});
export const TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = (user, bool) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: {
    user, // user object
    bool
  }
});
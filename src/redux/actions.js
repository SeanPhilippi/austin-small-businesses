export const TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  DELETE_LISTING: 'DELETE_LISTING',
};

export const setCurrentUser = (user, bool) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: {
    user, // user object
    bool
  }
});

export const deleteListing = idx => ({
  type: TYPES.DELETE_LISTING,
  payload: idx
});
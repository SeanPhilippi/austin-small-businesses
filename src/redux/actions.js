export const TYPES = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  DELETE_LISTING: 'DELETE_LISTING',
};

export const setAuthenticated = bool => ({
  type: TYPES.SET_AUTHENTICATED,
  payload: bool
});

export const setCurrentUser = user => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user // user object
});

export const deleteListing = idx => ({
  type: TYPES.DELETE_LISTING,
  payload: idx
});
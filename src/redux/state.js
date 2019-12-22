import listings from '../listings.json'

export default {
  user: {
    isAuthenticated: true,
    username: '',
    password: ''
  },
  errors: {
    login: {},
    register: {}
  },
  listings,
  map: []
};
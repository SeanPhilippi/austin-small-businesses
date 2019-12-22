import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { setCurrentUser, setAuthenticated } from '../redux/actions';
import { useForm } from '../hooks/useForm';

const cookie = require('cookie'); // ! use this

// import './LoginPage.css';

const LoginPage = ({
  setCurrentUser,
  setAuthenticated,
  history,
  errors
}) => {
  const [{ username, password }, handleChange] = useForm({
    username: '',
    password: ''
  });

  const handleLogin = e => {
    e.preventDefault();
    const user = {
      username,
      password
    };
    setCurrentUser(user);
    setAuthenticated(true);
    history.push('/listings');
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className="d-flex flex-column w-50 mx-auto"
      onSubmit={ e => handleLogin(e) }
    >
      <TextField
        error={ errors.login.name }
        onChange={ handleChange }
        className=""
        name="username"
        value={ username }
        label="Username"
        margin="normal"
        helperText={ errors.login.name && "Incorrect entry." }
      />
      <TextField
        error={ errors.login.password }
        onChange={ handleChange }
        type="password"
        className=""
        name="password"
        value={ password }
        label="Password"
        margin="normal"
        helperText={ errors.login.password && "Incorrect entry." }
      />
      <Button
        type='submit'
        className="mt-2"
        variant="contained"
      >
        Log In
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setAuthenticated: bool => dispatch(setAuthenticated(bool))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
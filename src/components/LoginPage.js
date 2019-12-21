import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { setCurrentUser } from '../redux/actions';
import { useForm } from '../hooks/useForm';

const cookie = require('cookie');

// import './LoginPage.css';

const LoginPage = ({
  setCurrentUser,
  history,
  errors
}) => {
  const [{ username, password }, handleChange] = useForm({
    username: '',
    password: ''
  });
  const handleLogin = () => {
    const user = {
      username,
      password
    };
    setCurrentUser(user, true);
    history.push('/listings');
  };

  return (
    <div className="d-flex flex-column w-50 mx-auto">
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
        className="mt-2"
        onClick={ handleLogin }
        variant="contained"
      >
        Log In
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user, bool) => dispatch(setCurrentUser(user, bool)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
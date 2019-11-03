import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

// import './RegisterPage.css';

class RegisterPage extends PureComponent {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  onTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleRegister = () => {
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.createNewUser(user, true);
  };

  render() {
    const { errors } = this.props;
    return (
      <div className="d-flex flex-column w-50 mx-auto">
        <TextField
          error={ errors.login.name }
          onChange={ this.onTextChange }
          className=""
          name="username"
          label="Username"
          margin="normal"
          helperText={ errors.login.name && "Incorrect entry." }
        />
        <TextField
          error={ errors.login.email }
          onChange={ this.onTextChange }
          type="email"
          className=""
          name="email"
          label="Email"
          margin="normal"
          helperText={ errors.login.email && "Incorrect entry." }
        />
        <TextField
          error={ errors.login.password }
          onChange={ this.onTextChange }
          type="password"
          className=""
          name="password"
          label="Password"
          margin="normal"
          helperText={ errors.login.password && "Incorrect entry." }
        />
        <TextField
          error={ errors.login.password2 }
          onChange={ this.onTextChange }
          type="password2"
          className=""
          name="password2"
          label="Confirm Password"
          margin="normal"
          helperText={ errors.login.password2 && "Incorrect entry." }
        />
        <Button
          className="mt-2"
          onClick={ this.handleLogin }
          variant="contained"
        >
          Log In
        </Button>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(RegisterPage);
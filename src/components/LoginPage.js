import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { setCurrentUser } from '../redux/actions';

// import './LoginPage.css';

class LoginPage extends PureComponent {
  state = {
    username: '',
    password: ''
  };

  onTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.setCurrentUser(user, true);
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
          error={ errors.login.password }
          onChange={ this.onTextChange }
          type="password"
          className=""
          name="password"
          label="Password"
          margin="normal"
          helperText={ errors.login.password && "Incorrect entry." }
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user, bool) => dispatch(setCurrentUser(user, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
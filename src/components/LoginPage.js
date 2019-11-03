import React from 'react';
import { TextField } from '@material-ui/core';

// import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="">
      <TextField
        id="standard-basic"
        className=""
        label="Username"
        margin="normal"
      />
      <TextField
        id="standard-basic"
        type="password"
        className=""
        label="Password"
        margin="normal"
      />
    </div>
  );
};

export default LoginPage;
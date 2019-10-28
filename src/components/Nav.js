import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Appbar from '@material-ui/core/Appbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    'display': 'flex',
    'justify-content': 'space-between',
  },
  title: {

  },
  status: {
    'background-color': 'lightgrey',
    'color': 'grey',
    'text-align': 'left',
    'padding': '.3rem 1.5rem'
  }
}));

const Nav = ({ username }) => {
  const classes = useStyles();
  return (
    <>
      <Appbar position="static">
        <Toolbar className={ classes.toolbar }>
          <Typography variant="h6" className={ classes.title }>
            Austin Small Businesses
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Appbar>
      <div className={ classes.status }>
        Logged in as: { username }
      </div>
    </>
  );
};

export default Nav;
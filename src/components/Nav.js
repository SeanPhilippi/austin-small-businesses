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
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <Appbar position="static">
      <Toolbar className={ classes.toolbar }>
        <Typography variant="h6" className={classes.title}>
          Austin Small Businesses
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </Appbar>
  );
}

export default Nav;
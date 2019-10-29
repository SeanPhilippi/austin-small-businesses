import React, { PureComponent } from 'react';
import { Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Appbar from '@material-ui/core/Appbar';
import './Nav.css';

class Nav extends PureComponent {
  whatToShow = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <div className="links">
          <Link to='/listings'>
            <Button color="inherit">
              Listings
            </Button>
          </Link>
          <Link to='/add'>
            <Button color="inherit">
              Add
            </Button>
          </Link>
          <Link to='logout'>
            <Button color="inherit">
              Log Out
            </Button>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="links">
          <Link to='/listings'>
            <Button color="inherit">
              Listings
            </Button>
          </Link>
          <Link to='/login'>
            <Button color="inherit">
              Login
            </Button>
          </Link>
        </div>
      )
    }
  };

  render() {
    const { username } = this.props;
    return (
      <>
        <Appbar position="static">
          <Toolbar className="toolbar">
            <Typography variant="h6" className="title">
              Austin Small Businesses
            </Typography>
            { this.whatToShow() }
          </Toolbar>
        </Appbar>
        <div className="status">
          Logged in as: { username }
        </div>
      </>
    );
  };
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  username: state.username
});

export default connect(mapStateToProps)(Nav);
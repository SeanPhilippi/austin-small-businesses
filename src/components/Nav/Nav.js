import React, { PureComponent } from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Appbar from '@material-ui/core/Appbar';
import { setCurrentUser, setAuthenticated } from '../../redux/actions';

import './Nav.css';

class Nav extends PureComponent {
  handleLogout = () => {
    const { setCurrentUser, setAuthenticated } = this.props;
    setCurrentUser({});
    setAuthenticated(false);
  }

  whatToShow = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <div className="links">
          <Link className="text-white nav_link" to='/listings'>
            Listings
          </Link>
          <Link className="text-white nav_link" to='/add-listing'>
            Add
          </Link>
          <Link
            onClick={ this.handleLogout }
            className="text-white nav_link"
            to='/login'
          >
            Log Out
          </Link>
        </div>
      )
    } else {
      return (
        <div className="links">
          <Link className="text-white nav_link" to='/listings'>
            Listings
          </Link>
          <Link
            className="text-white nav_link"
            to='/login'
          >
            Login
          </Link>
          <Link className="text-white nav_link" to='/register'>
            Register
          </Link>
        </div>
      )
    }
  };

  render() {
    const { user: { username }, isAuthenticated } = this.props;
    return (
      <>
        <Appbar position="static">
          <Toolbar className="toolbar">
            <Typography variant="h6" className="title">
              <Link className="text-white nav_link" to="/">
                Austin Small Businesses
              </Link>
            </Typography>
            { this.whatToShow() }
          </Toolbar>
        </Appbar>
        <div className="status">
          { isAuthenticated ? `Logged in as: ${ username }`: 'Please log in or register.' }
        </div>
      </>
    );
  };
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setAuthenticated: bool => dispatch(setAuthenticated(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
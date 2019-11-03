import React, { PureComponent } from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Appbar from '@material-ui/core/Appbar';
import { setCurrentUser } from '../../redux/actions';

import './Nav.css';

class Nav extends PureComponent {
  whatToShow = () => {
    const { isAuthenticated, setCurrentUser } = this.props;
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
            onClick={ () => setCurrentUser({}, false) }
            className="text-white nav_link"
            to='logout'
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
          <Link className="text-white nav_link" to='/login'>
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
  setCurrentUser: (user, bool) => dispatch(setCurrentUser(user, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
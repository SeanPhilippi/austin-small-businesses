import React, { PureComponent } from 'react';
import { Toolbar, Typography } from '@material-ui/core';
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
          <Link className="text-white nav_link" to='/listings'>
            Listings
          </Link>
          <Link className="text-white nav_link" to='/add-listing'>
            Add
          </Link>
          <Link className="text-white nav_link" to='logout'>
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
              <Link className="text-white nav_link" to="/">Austin Small Businesses</Link>
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
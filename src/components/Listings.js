import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TableRow, Table, TableHead, TableCell, TableBody } from '@material-ui/core';
import { deleteListing } from '../redux/actions';

const useStyles = makeStyles({
  table: {
    maxWidth: '90vw',
    margin: 'auto'
  }
});

const Listings = ({
  listings,
  deleteListing
}) => {
  const handleDelete = () => {
    deleteListing();
  };
  const classes = useStyles();
  return (
    <Table className={ classes.table }>
      <TableHead>
        <TableRow>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left">Hours</TableCell>
          <TableCell align="left">Address</TableCell>
          <TableCell align="left">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="">
        {
          listings.map((listing, idx) => {
            return (
              <TableRow>
                <TableCell align="left">
                  <Link
                    to={{
                      pathname: `/listing/${ listing.name }`,
                      state: { listing }
                    }}
                  >
                    { listing.name }
                  </Link>
                </TableCell>
                <TableCell align="left">{ listing.description }</TableCell>
                <TableCell align="left">{ listing.hours }</TableCell>
                <TableCell align="left">{ listing.address }</TableCell>
                <TableCell
                  align="left"
                  onClick={ () => deleteListing(idx) }
                >
                  ✕
                </TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
};

const mapStateToProps = state => ({
  listings: state.listings
});

const mapDispatchToProps = dispatch => ({
  deleteListing: idx => dispatch(deleteListing(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
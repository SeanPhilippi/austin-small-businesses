import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableRow, Table, TableHead, TableCell, TableBody } from '@material-ui/core';
const data = require('../listings.json');


const useStyles = makeStyles({
  table: {
    maxWidth: '90vw',
    margin: 'auto'
  }
});

const Listings = props => {
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
          data.map(listing => {
            return (
              <TableRow>
                <TableCell align="left">{ listing.name }</TableCell>
                <TableCell align="left">{ listing.description }</TableCell>
                <TableCell align="left">{ listing.hours }</TableCell>
                <TableCell align="left">{ listing.address }</TableCell>
                <TableCell align="left">{ listing.delete }</TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
};

export default Listings;
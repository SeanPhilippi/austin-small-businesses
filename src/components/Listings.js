import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TableRow, Table, TableHead, TableCell, TableBody } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Listings = ({ listings }) => {
  const classes = useStyles();
  return (
    <Table className={ classes.table }>
      <TableHead>
        <TableRow>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Hours</TableCell>
          <TableCell align="right">Address</TableCell>
          <TableCell align="right">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          listings.map(listing => {
            return (
              <>
                <TableCell align="right">{ listing.name }</TableCell>
                <TableCell align="right">{ listing.description }</TableCell>
                <TableCell align="right">{ listing.hours }</TableCell>
                <TableCell align="right">{ listing.address }</TableCell>
                <TableCell align="right">{ listing.delete }</TableCell>
              </>
            )
          })
        }
      </TableBody>
    </Table>
  );
};

export default Listings;
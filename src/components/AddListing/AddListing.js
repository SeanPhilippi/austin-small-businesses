import React from 'react';
import Map from '../Map/Map';
import { TextField, Button } from '@material-ui/core';
import './AddListing.css';

const AddListing = () => {
  return (
    <div className="add-listing-container">
      <form noValidate autoComplete="off" className="listing-inputs">
        <TextField
          id="standard-basic"
          className=""
          label="Name"
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className=""
          label="Address"
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className=""
          label="Hours (ex 8AM - 9PM)"
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className=""
          label="Description"
          margin="normal"
        />
        <Button type="submit" label="Add Listing" />
      </form>
      <Map />
    </div>
  );
};

export default AddListing;
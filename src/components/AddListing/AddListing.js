import React from 'react';
import Marker from '../Marker';
import { TextField } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
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
      </form>
      <div className="map">
        <GoogleMapReact>
          <Marker/>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default AddListing;
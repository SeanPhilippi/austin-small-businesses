import React from "react";
import { useForm } from '../../hooks/useForm';
import Map from "../Map/Map";
import { TextField, Button } from "@material-ui/core";
import "./AddListing.css";

const AddListing = () => {
  const [values, handleChange] = useForm({
    name: "",
    address: "",
    hours: "",
    description: ""
  });
  return (
    <div className="add-listing-container">
      <form noValidate autoComplete="off" className="listing-inputs">
        <TextField
          id="standard-basic"
          className=""
          label="Name"
          name="name"
          margin="normal"
          value={ values.name }
          onChange={ handleChange }
        />
        <TextField
          id="standard-basic"
          className=""
          label="Address"
          name="address"
          margin="normal"
          value={ values.address }
          onChange={ handleChange }
        />
        <TextField
          id="standard-basic"
          className=""
          label="Hours (ex 8AM - 9PM)"
          name="hours"
          margin="normal"
          value={ values.hours }
          onChange={ handleChange }
        />
        <TextField
          id="standard-basic"
          className=""
          label="Description"
          name="description"
          margin="normal"
          value={ values.description }
          onChange={ handleChange }
        />
        <Button type="submit" label="Add Listing" />
      </form>
      <Map />
    </div>
  );
};

export default AddListing;

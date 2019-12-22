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

  const handleAdd = e => {
    e.preventDefault();
    const { name, address, hours, description } = values;
    const newListing = {
      name,
      address,
      hours,
      description
    }
    // redux action for adding to listings in redux state

    // post request to database

    // function for showing a successful add message bar?
  };

  return (
    <div className="add-listing-container">
      <form
        noValidate
        autoComplete="off"
        className="listing-inputs"
        onSubmit={ e => handleAdd(e) }
      >
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
        <Button
          type="submit"
          className="mt-4"
          variant="contained"
        >
          Add New Listing
        </Button>
      </form>
      <Map />
    </div>
  );
};

export default AddListing;

import React from 'react';
import Map from '../Map/Map';
import './Details.css';

const Details = ({
  location: {
    state: {
      listing: {
        name,
        description,
        hours,
        address,
        lat,
        lng
      }
    }
  }
}) => {
  return (
    <div className="details-container">
      <div>
        <h1>
          { name }
        </h1>
        <p>
          <b>{ address }</b>
        </p>
        <p>
          <b>{ hours }</b>
        </p>
        <p className="description">
          { description }
        </p>
      </div>
      <Map />
    </div>
  );
};

export default Details;
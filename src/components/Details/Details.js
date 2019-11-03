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
      <div className="w-50 text-left">
        <h2>
          { name }
        </h2>
        <p>
          <b>{ address }</b>
        </p>
        <p>
          <b>{ hours }</b>
        </p>
        <p>
          { description }
        </p>
      </div>
      <Map center={{ lat, lng }} />
    </div>
  );
};

export default Details;
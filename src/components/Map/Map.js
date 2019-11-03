import React, { PureComponent } from 'react';
import Marker from '../Marker';
import GoogleMapReact from 'google-map-react';
import './Map.css';

class Map extends PureComponent {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 16
  };

  render() {
    const { zoom, center, center: { lat, lng } } = this.props;
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={ center }
          defaultZoom={ zoom }
        >
          <Marker
            lat={ lat }
            lng={ lng }
          />
        </GoogleMapReact>
      </div>
    )
  };
};

export default Map;
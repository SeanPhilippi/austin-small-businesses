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
    zoom: 11
  };

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
        >
          <Marker
            lat={ 59.955413 }
            lng={ 30.337844 }
          />
        </GoogleMapReact>
      </div>
    )
  };
};

export default Map;
import React from 'react';
import GoogleMapReact from 'google-map-react';

import mapMarker from '../styles/map-marker';

// eslint-disable-next-line
const SomeComponent = ({ text }) => <div style={mapMarker}>{text}</div>;

const ServerLocation = (props) => {
  // eslint-disable-next-line
  const { data } = props;
  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={data}
        defaultZoom={10}
      >
        <SomeComponent
          lat={data.lat}
          lng={data.lng}
          text="X"
        />
      </GoogleMapReact>
    </div>
  );
};

export default ServerLocation;

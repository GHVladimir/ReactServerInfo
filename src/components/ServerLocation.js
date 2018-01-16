import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import { mapMarker } from '../styles/map-marker';

const SomeComponent = ({ text }) => <div style={mapMarker}>{text}</div>;
export default class ServerLocation extends Component {

  render() {
    const data = this.props.data;
    return (
      <div className='map'>
        <GoogleMapReact
          defaultCenter={data}
          defaultZoom={10}>
          <SomeComponent
            lat={data.lat}
            lng={data.lng}
            text={'X'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
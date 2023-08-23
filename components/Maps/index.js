import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

function Maps() {
  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 55.2708,
    lng: 25.2048,
  };

  return (
    <>
    <LoadScript googleMapsApiKey="AIzaSyBKblATwDVg8qG-TiCc26P_XY0qL3ogDrY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
      >
        {/* Add markers or other components here */}
      </GoogleMap>
    </LoadScript>
    </>
  );
}

export default Maps;
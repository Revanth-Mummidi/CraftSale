import React from 'react';
import GoogleMapReact from 'google-map-react';

function MapComponent() {
  // Array of locations to mark on the map
  const locations = [
    { lat: 37.7749, lng: -122.4194, name: 'San Francisco' },
  
  ];

  // Render markers for each location
  const renderMarkers = () => {
    return locations.map((location, index) => (
      <div key={index} lat={location.lat} lng={location.lng}>
        <div className="bg-black-500 rounded-full w-6 h-6 text-white text-center">{location.name}</div>
      </div>
    ));
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }} // Replace 'YOUR_API_KEY' with your actual Google Maps API key
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }} 
        defaultZoom={5} // Default zoom level
      >
        {renderMarkers()}
      </GoogleMapReact>
    </div>
  );
}

export default MapComponent;

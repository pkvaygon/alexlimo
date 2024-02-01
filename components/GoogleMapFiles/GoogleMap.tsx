"use client";
import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, Polyline } from '@react-google-maps/api';
import { LocationClickedEvent, RootState } from '@/types';
import { useSelector } from 'react-redux';

export default function Map() {
  const reduxLocation = useSelector((state: RootState)=> state.map.location)
  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: reduxLocation.lat || 41.888906572566796,
    lng: reduxLocation.lng || -87.6264612342834,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string
  })

  // const [map, setMap] = React.useState<google.maps.Map | null>(null);

  // const onLoad = React.useCallback(function callback(map: google.maps.Map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, [center]);

  // const onUnmount = React.useCallback(function callback() {
  //   setMap(null);
  // }, []);
const options = {
  mapTypeControl: false,
  streetViewControl: false,
}
  function locationClicked(event: google.maps.MapMouseEvent) {
  console.log(event?.latLng?.lat())
  console.log(event?.latLng?.lng())
  }
  return isLoaded ? (
    <GoogleMap
    options={options}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onClick={locationClicked}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {
        reduxLocation.lat !== null && reduxLocation.lng !== null && (
          <MarkerF position={{lat: reduxLocation.lat,lng: reduxLocation.lng}} />
        )
      }
       <MarkerF position={{lat: 41.98040859408443,lng: -87.90890952190797}} />
      {
       reduxLocation.lat !== null && reduxLocation.lng !== null && (
        <Polyline
        path={[
          { lat: reduxLocation.lat, lng: reduxLocation.lng },
          { lat: 41.98040859408443, lng: -87.90890952190797 },
        ]}
        options={{ strokeColor: '#00FF00' }} // Цвет линии
      />
          )}
    </GoogleMap>
  ) : <div>Loading...</div>;
}

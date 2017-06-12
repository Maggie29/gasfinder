'use strict';

const initMap = (mapNode) => {
  const mymap = new GMaps({
    div: mapNode,
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    zoom: 14
  });

  mymap.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  GMaps.geolocate({
    success: (location) => {
      mymap.addMarker({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
      mymap.drawRoute({
        origin: [location.coords.latitude, location.coords.longitude],
        destination: [state.selectedStation.lat, state.selectedStation.long],
        travelMode: 'driving',
        strokeColor: '#131540',
        strokeOpacity: 0.9,
        strokeWeight: 6
      });
    }
  });
}

const Gmap = () => {
  const map = $('<div id="map"></div>');
  map.init = function() {
    initMap(map[0]);
  }
  return map;
}

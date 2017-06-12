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

function initMap(){
  let pos;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position)
  pos = {
    lat: position.coords.latitude,
    lng: position.coords.latitude,
  };

      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: pos
      });

      directionsDisplay.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsDisplay, pos);
    })
  }
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pos) {
  directionsService.route({
    origin: pos,
    destination: {lat: state.selectedStation.lat, lng: state.selectedStation.long},
    travelMode: 'DRIVING'
  }, function (response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
      const distancia = ((response.routes[0].legs[0].distance.text));
      $('#km').text(distancia);
    } else {
      window.alert('No encontramos una ruta ' + status);
    }
  });
}

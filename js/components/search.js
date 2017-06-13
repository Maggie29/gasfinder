'use strict';

const Search = (update) => {
  const parent = $('<div></div>');
  const div = $('<div class="container-search"></div>');
  const search = $('<div class="search"></div>');
  const input = $('<input type="text" class="input" placeholder="Ingresa distrito a buscar">');
  const icon = $('<i class="fa fa-search"></i>');
  const containerStations = $('<div class="container-stations"></div>');
  input.on("keyup", (e) => {
    if($(e.currentTarget).val() != ""){
      const filterStations = filterByDistrict(state.stations, $(e.currentTarget).val());
      reRender(containerStations, filterStations,update);
      if(filterStations.length == 0){
        containerStations.append(alert);
      }
    }else{
      containerStations.empty();
    }
  });
  search.append(icon);
  search.append(input);
  div.append(search)
  parent.append(div);
  parent.append(containerStations);

  return parent;
}

const StationItem = (station, update) =>{
  const stationItem = $('<div class="station"></div>');
  const h3=$('<h3>'+ station.name + '</h3>');
  const iconMap = $('<a href="#" class="fa fa-map icon-map"></a>');
  const stationAddress = $('<p clas="address">'+ station.address + '</p>');
  const stationDistrict = $('<p class="district">' + station.district + '</p>');

  stationItem.append(h3);
  stationItem.append(stationAddress);
  stationItem.append(stationDistrict);
  stationItem.append(iconMap);

  iconMap.on("click", (e) =>{
    state.selectedStation = station;
    update();
  })
  return stationItem;
  }

  const reRender = (container, filterStations, update) => {
  container.empty();

  filterStations.forEach((station) => {
    container.append(stationItem(station, update));
  });
}

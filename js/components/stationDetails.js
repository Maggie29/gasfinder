const StationDetail = (update) => {
  const parent = $('<section class="detail"></section>');
  const iconLeft = $("<i class='fa fa-chevron-left icon-left' aria-hidden='true'></i>");
  const contentMap =$("<div class='content-map'></div>");
  const Gmap = $("<div id='map'></div>");
  const station = $('<p class="bold">Grifo ' + state.selectedStation.name + '</p>');
  const hr = $('<hr>');
  const address = $('<span>' + state.selectedStation.address + '</span>');
  const km = $('<span id="km"></span>');
  const products = $('<div class="products"></div>');

  parent.append(iconLeft);
  contentMap.append(map);
  parent.append(contentMap);
  parent.append(station);
  parent.append(hr);
  parent.append(address);
  parent.append(km);
  parent.append(products);

  iconLeft.on('click', (e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  });


  state.selectedStation.products.forEach((e) => {
    const square = $("<span class='square'>" + e + "</span>");
    products.append(square);
  });
  return parent;
}

'use strict';

const render = (root) => {
  let gmap = null;

  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function(){
    render(root);
  }

wrapper.append(Header(update));
if (state.selectedStation == null) {
  wrapper.append(Search(update));
} else {
  gmap = Gmap();
  wrapper.append(gmap);
}
root.append(wrapper);
gmap.init();

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});

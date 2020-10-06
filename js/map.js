const hamburger = document.querySelector('.menu-icon');
const nav = document.querySelector('.hamburger-navs');
const menuIcon = document.querySelector('.menu-icon');

// hamburger menu button
hamburger.addEventListener('click', (e) => {
  if (nav.classList.contains("addNav")) {
    nav.classList.remove('addNav')
    menuIcon.src = "img/menu-icon.svg";
  } else {
    nav.classList.add('addNav');
    menuIcon.src = "img/close.svg";
  }
})

//map
mapboxgl.accessToken = 'pk.eyJ1IjoiMnBoZWxqNTYiLCJhIjoiY2tmcXBvemdkMGdkazJ3b2Zza3dkbXFwaiJ9.VTG7wmphDY9NM4u2nxC3PQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-1.605367,52.138660], // starting position
  zoom: 17
});

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();

// an arbitrary start will always be the same
// only the end or destination will change
var start = [-122.662323, 45.523751];

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':
'<p style="font-size: 14px; color: #1A2F30; padding: 24px">Lindsey\'s Beauty Salon</p>',
'icon': 'circle'
},
'geometry': {
'type': 'Point',
'coordinates': [-1.605367, 52.138660]
}
}
]
}
});
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': '{icon}-15',
'icon-allow-overlap': true
}
});

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});

map.on('mouseenter', 'places', function (e) {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';

var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}

// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'places', function () {
map.getCanvas().style.cursor = '';
popup.remove();
});
});

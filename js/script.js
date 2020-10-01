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

// hash tag scroll
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 86);
});

//map
mapboxgl.accessToken = 'pk.eyJ1IjoiMnBoZWxqNTYiLCJhIjoiY2tmcXBvemdkMGdkazJ3b2Zza3dkbXFwaiJ9.VTG7wmphDY9NM4u2nxC3PQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-1.605367,52.138660], // starting position
  zoom: 17
});

// add icon
var marker = new mapboxgl.Marker()
.setLngLat([-1.605367, 52.138660])
.addTo(map);

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();

// an arbitrary start will always be the same
// only the end or destination will change
var start = [-122.662323, 45.523751];

// this is where the code for the next step will go

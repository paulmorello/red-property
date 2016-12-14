
var map;
var lat;
var long;

// empty array for property markers
var markers = [];

function initMap() {

   var styles =[{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#444444"}
    ]
  },{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      { "color": "#f2f2f2" }
    ]
  },{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 45 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
        { "visibility": "simplified"}
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
        {"visibility": "off"}
    ]
  },{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        { "color": "#46bcec" },
        { "visibility": "on" }
      ]
    }
  ];

  // Style the markers a bit. This will be our listing marker icon.
  var defaultIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Home_icon.svg/35px-Home_icon.svg.png";

  var melbourne = { lat: -37.8140000, lng: 144.9633200 }
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: melbourne,
    zoom: 10,
    styles: styles,
    mapTypeControl: false
  });

  var marker = new google.maps.Marker({
     position: melbourne,
     map: map,
     animation: google.maps.Animation.DROP,
     icon: defaultIcon
   });

}

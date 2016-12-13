
var map;

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

  var userLat, userLong, userAccuracy;
  // find users current position
  navigator.geolocation.getCurrentPosition(function(location) {
    userLat = location.coords.latitude;
    userLong = location.coords.longitude;
    userAccuracy = location.coords.accuracy;
  });

  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -37.8140000, lng: 144.9633200},
    zoom: 13,
    styles: styles,
    mapTypeControl: false
  });

}

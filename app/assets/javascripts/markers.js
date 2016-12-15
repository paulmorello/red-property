
var markers = [];
var geocoder;
var city;
var newLat;
var newLng;

function codeAddress() {

  // set default icon
  var defaultIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Home_icon.svg/35px-Home_icon.svg.png";

  // iterate through markers to geocode address
  for (var i = 0; i < 10; i++) {
    var address = markers[i] + ',australia';
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        console.log(results[0]);
        city = results[0].geometry.location
        newLat = city.lat();
        newLng = city.lng();
        map.setCenter(map.panTo(new google.maps.LatLng(newLat, newLng)))

        // create marker and place on map
        var marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          icon: defaultIcon,
          position: results[0].geometry.location
        });
      } else if (status == 'ZERO_RESULTS') {
        console.log(status);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}

window.onload = function() {
  markers = [];
  geocoder = new google.maps.Geocoder();

  // getting city names from each property card
  var locations = $('div.home-content-card h2')

  // iterate through locations and push into markers array
  for (var i = 0; i < locations.length; i++) {
    if (markers.includes(locations[i].innerHTML)) {
      continue;
    } else {
      markers.push(locations[i].innerHTML)
    }
  }
  console.log(markers);
  codeAddress();

}

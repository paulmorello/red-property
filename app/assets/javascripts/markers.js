
var markers = [];
var geocoder;

window.onload = function() {

  geocoder = new google.maps.Geocoder();

  // getting city names from each property card
  var locations = $('div.home-content-card h2')

  // iterate through locations and push into markers array
  for (var i = 0; i < locations.length; i++) {
    markers.push(locations[i].innerHTML)
  }
  // codeAddress();
}

function codeAddress() {

  // set default icon
  var defaultIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Home_icon.svg/35px-Home_icon.svg.png";

  // iterate through markers to geocode address
  for (var i = 0; i < markers.length; i++) {
    var address = markers[i] + ',australia';
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        console.log(results[0]);

        // create marker and place on map
        var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}

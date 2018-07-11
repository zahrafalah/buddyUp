//google maps function

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 33.4483771, lng: -112.0740373 }
  });
  var geocoder = new google.maps.Geocoder();

  //  document.getElementById('submit').addEventListener('click', function () {
  geocodeAddress(geocoder, map);
  //  });
}

function geocodeAddress(geocoder, resultsMap) {
  //  var address = document.getElementById('address').value;
  geocoder.geocode({ 'address': address}, function (results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
};
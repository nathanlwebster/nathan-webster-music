var map = "";
var google = "";
var geocoder = "";
var marker = "";
var newZip = "";
var deferred = $.Deferred();

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(39.8282, -98.5795),
      styles: [
      {"featureType":"all",
      "elementType":"geometry",
      "stylers":[{"color":"#ffffff"}]},
      {"featureType":"all",
      "elementType":"labels.text.fill",
      "stylers":[{"gamma":0.01},{"lightness":20}]},
      {"featureType":"all",
      "elementType":"labels.text.stroke",
      "stylers":[{"saturation":-31},
      {"lightness":-33},
      {"weight":2},
      {"gamma":0.8}]},
      {"featureType":"all",
      "elementType":"labels.icon",
      "stylers":[{"visibility":"off"}]},
      {"featureType":"administrative.locality",
      "elementType":"labels.text.fill",
      "stylers":[{"color":"#050505"}]},
      {"featureType":"administrative.locality",
      "elementType":"labels.text.stroke",
      "stylers":[{"color":"#fef3f3"},
      {"weight":"3.01"}]},
      {"featureType":"administrative.neighborhood",
      "elementType":"labels.text.fill",
      "stylers":[{"color":"#0a0a0a"},
      {"visibility":"off"}]},
      {"featureType":"administrative.neighborhood",
      "elementType":"labels.text.stroke",
      "stylers":[{"color":"#fffbfb"},
      {"weight":"3.01"},{"visibility":"off"}]},
      {"featureType":"landscape",
      "elementType":"geometry",
      "stylers":[{"lightness":30},
      {"saturation":30}]},
      {"featureType":"poi",
      "elementType":"geometry",
      "stylers":[{"saturation":20}]},
      {"featureType":"poi.attraction",
      "elementType":"labels.icon","stylers":[{"visibility":"off"}]},
      {"featureType":"poi.park",
      "elementType":"geometry",
      "stylers":[{"lightness":20},
      {"saturation":-20}]},
      // {"featureType":"road",
      // "elementType":"geometry",
      // "stylers":[{"lightness":10},
      // {"saturation":-30}]},
      // {"featureType":"road",
      // "elementType":"geometry.stroke",
      // "stylers":[{"saturation":25},
      // {"lightness":25}]},
      // {"featureType":"road.highway",
      // "elementType":"geometry.fill",
      // "stylers":[{"visibility":"off"},
      // {"color":"#a1a1a1"}]},
      // {"featureType":"road.highway",
      // "elementType":"geometry.stroke",
      // "stylers":[{"color":"#292929"}]},
      // {"featureType":"road.highway",
      // "elementType":"labels.text.fill",
      // "stylers":[{"visibility":"off"},
      // {"color":"#202020"}]},
      // {"featureType":"road.highway",
      // "elementType":"labels.text.stroke",
      // "stylers":[{"visibility":"off"},
      // {"color":"#ffffff"}]},
      // {"featureType":"road.highway",
      // "elementType":"labels.icon",
      // "stylers":[{"visibility":"off"},
      // {"hue":"#0006ff"},
      // {"saturation":"-100"},
      // {"lightness":"13"},
      // {"gamma":"0.00"}]},
      // {"featureType":"road.arterial",
      // "elementType":"geometry.fill",
      // "stylers":[{"visibility":"off"},
      // {"color":"#686868"}]},
      // {"featureType":"road.arterial",
      // "elementType":"geometry.stroke",
      // "stylers":[{"visibility":"off"},
      // {"color":"#8d8d8d"}]},
      // {"featureType":"road.arterial",
      // "elementType":"labels.text.fill",
      // "stylers":[{"visibility":"off"},
      // {"color":"#353535"},
      // {"lightness":"6"}]},
      // {"featureType":"road.arterial",
      // "elementType":"labels.text.stroke",
      // "stylers":[{"visibility":"off"},
      // {"color":"#ffffff"},
      // {"weight":"3.45"}]},
      // {"featureType":"road.local",
      // "elementType":"geometry.fill",
      // "stylers":[{"color":"#d0d0d0"}]},
      // {"featureType":"road.local",
      // "elementType":"geometry.stroke",
      // "stylers":[{"lightness":"2"},
      // {"visibility":"on"},
      // {"color":"#999898"}]},
      // {"featureType":"road.local",
      // "elementType":"labels.text.fill",
      // "stylers":[{"color":"#383838"}]},
      // {"featureType":"road.local",
      // "elementType":"labels.text.stroke",
      // "stylers":[{"color":"#faf8f8"}]},
      {"featureType":"water",
      "elementType":"all",
      "stylers":[{"lightness":-20}]
      }
      ]
    });
geocoder = new google.maps.Geocoder();
};

function getLocation(address) {
    //change zip code to lat/long
    var lat = '';
    var lng = '';
    //var address = $(this).address;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
         lat = results[0].geometry.location.lat();
         lng = results[0].geometry.location.lng();

        var newLoc = {"latitude": lat, "longitude": lng};
        //alert("Here are the " + newLoc + " from getLocation.");
        deferred.resolve(newLoc);
       } else {
        //alert("Geocode was not successful for the following reason: " + status);
      }
      // alert('Latitude: ' + lat + ' Logitude: ' + lng);

    });

};

// $(function(){
// var newLoc = "";

function setMarkers() {
      $.getJSON('/marker', function (data){
        //console.log(data);
        var json = data;
        for (var i = 0; i < json.length; i++) {

          var coords = json[i];
          //console.log(coords);
          var latLng = new google.maps.LatLng(coords.latitude,coords.longitude);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: '/images/musicmarker2.png'
          });
          //console.log(coords);
      }
    });
};



$(document).ready(function() {
  setMarkers();
  $("#inputButtonGeocode").click(function() {
    event.preventDefault();
    newZip = $("#inputTextAddress").val();
    // get the coordinates based on the zipcode
    getLocation(newZip);
    // when the request for the coordinates is back...
    $.when(deferred).done(function (newLoc) {
        //get the request string in the right format
        var loc = ("\?latitude=" + newLoc.latitude + "&longitude=" + newLoc.longitude);
        encodeURIComponent(loc);
        //send the request to the server
        $.post('/marker/' + loc, function() {
          window.location.reload();
        });
      });
        //reload the page so you can see the new marker

      });
    });
// function addMarkerToJSON (newLoc) {

// };

  // });
// });

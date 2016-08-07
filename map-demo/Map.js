//api key = AIzaSyBioBU6PiWwk-JPRwQhUE896ZWN0AJRty8
var globalMap;
var markers = [];
//functions declared in Jquery document.ready
$(function() {



//Write function that changes map center when a new marker is made.
//Make buttons that cycle through markers on the map
//Add a button that removes the selected marker.
  //or show the array as a list of selectable marker


MapFcns.loadSiteList();
//when #airport-list is changed, triggers siteListChange
$('#airport-list').change(MapFcns.siteListChange);
//
$('#exercise-toggle').click(function() {
    var  toggleCtl = $(this),
         toggleVal = toggleCtl.text();
    if (toggleVal == '-') {
        toggleCtl.text('+');
        $('#exercise-instructions').hide();
    } else {
        toggleCtl.text('-');
        $('#exercise-instructions').show();
    }
});
$('#markerList').on('click', 'button', MarkerFcns.remFromMarkerList);
$('#markerList').on('click', 'div', MarkerFcns.goToMarker);
// MarkerFcns.makeMarkerList();

});



function  initMap() {
  // Callback function to create a map object and specify the DOM element for display.
  globalMap = new google.maps.Map(document.getElementById('airport-map'), {
    center: {lat: 42.2814, lng: -83.7483},
    scrollwheel: true,
    zoom: 6
  });

    }

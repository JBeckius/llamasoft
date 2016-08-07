var MarkerFcns = {
  // makeMarkerList: function() {
  //   markers.forEach(function(each) {
  //     console.log(each);
  //     console.log(each.title);
  //     var $markerItem = $('<p></p>');
  //     $markerItem.text(each.title);
  //     $markerItem.appendTo('#markerList');
  //   })
  // },

  addToMarkerList: function() {
    var marker = markers[markers.length -1];
    var title = marker.title;
    var $markerDiv = $('<div></div>')
    $markerDiv.attr('id', title);
    $markerDiv.appendTo('#markerList');
    var $markerItem = $('<p></p>');
    $markerItem.text(title);
    $markerItem.appendTo('#' + title);
    var $markerBtn = $('<button></button>');
    $markerBtn.text('X');
    $markerBtn.appendTo('#' + title);

  },

  remFromMarkerList: function() {
    var id = $(this).parent().attr('id');
    var toRemove = _.findIndex(markers, {title: id});
    if (toRemove > -1) {
      markers[toRemove].setMap(null);
      markers.splice(toRemove, 1);
    }
    var currAirport = _.findWhere(sites, {Code: id});
    currAirport.toggled = 0;
    $(this).parent().remove();
    console.log(markers);
    console.log(id);
  },

  goToMarker: function() {
    var id =$(this).attr('id');
    var toCenter = _.findIndex(markers, {title: id});
    if(toCenter > -1) {
      var marker = markers[toCenter];
      globalMap.setCenter(marker.position);
      $('#airport-list').val(marker.title);
      $('#airport-list').change();
    }

  }
}

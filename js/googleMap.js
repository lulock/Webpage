var map;
function initMap() {

  var home = {lat: 32.890576, lng: 13.189881};
  var born = {lat: 59.60, lng: 16.544059};
  var bachelors = {lat: 49.260430, lng: -123.245683};
  var highschool = {lat: 25.020598, lng: 55.203341};
  var summer = {lat: 48.235654, lng: 16.416671};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50, lng: -34},
    zoom: 2,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    streetViewControl: false,
    mapTypeControl: false,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1b281e"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f9fbff"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#081116"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#6f5166"
          },
          {
            "weight": 1
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c1a34"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#060208"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#917c90"
          }
        ]
      }
    ]

  });

  // variable to define the content of Info Window
  var content1 = '<div id="iw_container">' +
  '<div class="iw_content">I am originally from Libya.</div>' +
  '</div>';

  var content2 = '<div id="iw_container">' +
  '<div class="iw_content">I was born in Västerås, Sweden.</div>' +
  '</div>';

  var content3 = '<div id="iw_container">' +
  '<div class="iw_content">I received my BSc. in Computer Science at the University of British Columbia in gorgeous Vancouver.</div>' +
  '</div>';

  var content4 = '<div id="iw_container">' +
  '<div class="iw_content">I grew up and attended highschool in Dubai, UAE.</div>' +
  '</div>';

  var content5 = '<div id="iw_container">' +
  '<div class="iw_content">I spent many summer/winter holidays in Vienna, Austria.</div>' +
  '</div>';

  // creates the new Info Window with reference to the variable infowindow and establishes the content
  var infowindow1 = new google.maps.InfoWindow({
    content: content1,
    maxWidth: 200
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: content2,
    maxWidth: 200
  });
  var infowindow3 = new google.maps.InfoWindow({
    content: content3,
    maxWidth: 200
  });
  var infowindow4 = new google.maps.InfoWindow({
    content: content4,
    maxWidth: 200
  });
  var infowindow5 = new google.maps.InfoWindow({
    content: content5,
    maxWidth: 200
  });

  var marker1 = new google.maps.Marker({
    position: home,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: born,
    map: map
  });
  var marker3 = new google.maps.Marker({
    position: bachelors,
    map: map
  });
  var marker4 = new google.maps.Marker({
    position: highschool,
    map: map
  });
  var marker5 = new google.maps.Marker({
    position: summer,
    map: map
  });
  marker1.addListener('click', function() {
    infowindow1.open(map, marker1);

    // close any open windown
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
  });

  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);

    // close any open windown
    infowindow1.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
  });

  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);

    // close any open windown
    infowindow1.close();
    infowindow2.close();
    infowindow4.close();
    infowindow5.close();
  });

  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);

    // close any open windown
    infowindow1.close();
    infowindow2.close();
    infowindow3.close();
    infowindow5.close();
  });

  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);

    // close any open windown
    infowindow1.close();
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
  });

  // event to close the infoWindow with a click on the map
  google.maps.event.addListener(map, 'click', function() {
    infowindow1.close();
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
  });

}

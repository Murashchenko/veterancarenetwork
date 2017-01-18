var markers = {};
var pos = {};

pos.hospital = [{
  lat: 49.582566,
  lng: 34.551238
},{
  lat: 49.581346,
  lng: 34.550909
},{
  lat: 49.573603,
  lng: 34.524426
},{
  lat: 49.565303,
  lng: 34.538765
},{
  lat: 49.613819,
  lng: 34.530874
}];

pos.medicare = [{
  lat: 49.610315,
  lng: 34.523292
},{
  lat: 49.605424,
  lng: 34.523090
},{
  lat: 49.597133,
  lng: 34.559272
},{
  lat: 49.592861,
  lng: 34.558563
},{
  lat: 49.589412,
  lng: 34.557509
}];

pos.nongov = [{
  lat: 49.597663,
  lng: 34.602393
},{
  lat: 49.598031,
  lng: 34.608510
},{
  lat: 49.566348,
  lng: 34.551998
},{
  lat: 49.567325,
  lng: 34.494328
},{
  lat: 49.587300,
  lng: 34.516047
}];

pos.tricare = [{
  lat: 49.593744,
  lng: 34.500795
},{
  lat: 49.571206,
  lng: 34.544258
},{
  lat: 49.571972,
  lng: 34.566766
},{
  lat: 49.587300,
  lng: 34.500795
},{
  lat: 49.580722,
  lng: 34.573253
}];

pos.therapy = [{
  lat: 49.585856,
  lng: 34.566511
},{
  lat: 49.596649,
  lng: 34.538747
},{
  lat: 49.593261,
  lng: 34.541910
},{
  lat: 49.598527,
  lng: 34.528410
},{
  lat: 49.599258,
  lng: 34.537274
}];

var controlMenuButton = document.querySelector('.map-menu__item._markers');
var markerControlMenu = document.querySelector('.mc-menu');

controlMenuButton.addEventListener('click', function () {
  shiftLastClass(markerControlMenu, '_active');
});

var modButtons = document.querySelectorAll('.mc-menu__mode-btn');
var markerControlMenuList = document.querySelector('.mc-menu__list');

for (var i = 0; i < modButtons.length; i++) {

  modButtons[i].addEventListener('click', function () {
    if (this != document.querySelector('.mc-menu__mode-btn._active')) {

      shiftLastClass(markerControlMenuList, '_legendMode');
      for (var i = 0; i < modButtons.length; i++) {
        shiftLastClass(modButtons[i], '_active');
      }

    }
  });
}

var markerControlMenuButtons = document.querySelectorAll('.mc-menu__btn');

for (var i = 0; i < markerControlMenuButtons.length; i++) {
  markerControlMenuButtons[i].addEventListener('click', function () {
    shiftLastClass(this, '_active');

    var establishmentType = this.dataset.type;

    if (this.className == 'mc-menu__btn _active') {
      var mapValue = map;
    } else {
      mapValue = null;
    }

    for (var i = 0; i < markers[establishmentType].length; i++) {
      markers[establishmentType][i].setMap(mapValue);
    }
  });
}

function shiftLastClass(element, lastClass) {
  var classes = element.className.split(' ');
  if (classes[classes.length - 1] != lastClass) {
    classes.push(lastClass);
    element.className = classes.join(' ');
    return;
  }
  classes = classes.slice(0, -1);
  element.className = classes.join(' ');
}

function initMap() {
  var uluru = {lat:  49.589593, lng: 34.550857};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru,
          disableDefaultUI: true
        });
        window.map = map;

        for (var establishmentType in pos) {
          markers[establishmentType] = [];

          for (var i = 0; i < pos[establishmentType].length; i++) {

            var marker = new google.maps.Marker({
              position: pos[establishmentType][i],
              map: map,
              type: establishmentType,
              icon: "img/" + establishmentType + ".png"
            });

            markers[establishmentType].push(marker);
          }
        }
}

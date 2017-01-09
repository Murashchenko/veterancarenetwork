var markersHospital = [];
var hospitalsPos = [{
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

var markersMedicare = [];
var medicarePos = [{
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

var markersNongov = [];
var nongovPos = [{
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

var markersTricare = [];
var tricarePos = [{
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

var markersTherapy = [];
var therapyPos = [{
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

function initMap() {
  var uluru = {lat:  49.589593, lng: 34.550857};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru,
          disableDefaultUI: true
        });

        for (var i = 0; i < 5; i++) {
          var marker = new google.maps.Marker({
            position: hospitalsPos[i],
            map: map,
            type: "hospital",
            icon: "img/hospital.png"
          });
          markersHospital.push(marker);
        }

        for (var i = 0; i < 5; i++) {
          var marker = new google.maps.Marker({
            position: medicarePos[i],
            map: map,
            type: "medicare",
            icon: "img/medicare.png"
          });
          markersMedicare.push(marker);
        }

        for (var i = 0; i < 5; i++) {
          var marker = new google.maps.Marker({
            position: nongovPos[i],
            map: map,
            type: "nongov",
            icon: "img/nongov.png"
          });
          markersNongov.push(marker);
        }

        for (var i = 0; i < 5; i++) {
          var marker = new google.maps.Marker({
            position: tricarePos[i],
            map: map,
            type: "tricare",
            icon: "img/tricare.png"
          });
          markersTricare.push(marker);
        }

        for (var i = 0; i < 5; i++) {
          var marker = new google.maps.Marker({
            position: therapyPos[i],
            map: map,
            type: "therapy",
            icon: "img/therapy.png"
          });
          markersTherapy.push(marker);
        }
}

// function toggleMarkers() {
//   for (var i = 0; i < markersArr.length; i++) {
//     console.log(markersArr[i].type);
//     markersArr[i].setMap(null);
//   }
// }

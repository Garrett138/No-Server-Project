angular.module('myApp').service('service', function($http) {
  this.recData = [];
  var self = this;
  this.getCamp = function(camp) {
    return $http({
      method: "Get",
      url: 'https://ridb.recreation.gov/api/v1/recareas?apikey=444A9788754B43C8A5FE062FBBC3E603&latitude=' + camp.lat /*32.7777065*/ + '&' + 'longitude=' + camp.lng /*-96.795446*/ + '&radius=150&'
    }).then(function(response) {
      this.recData = response.data.RECDATA.map(function(cur) {
        return {
          RecAreaDescription: cur.RecAreaDescription,
          RecAreaID: cur.RecAreaID,
          RecAreaLatitude: cur.RecAreaLatitude,
          RecAreaLongitude: cur.RecAreaLongitude,
          RecAreaName: cur.RecAreaName,
          RecAreaPhone: cur.RecAreaPhone
        }
      })
      return this.recData
    })
  }
  this.searchZip = function(zip) {
    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyAak5ZBuz0CiHC8QCWwphZkyAXbeUxWjhA")
      .then(function(response) {
        self.getCamp(response.data.results[0].geometry.location)
          .then(function(arr) {
            var mapContainer = document.getElementById("map")
            var map = new window.google.maps.Map(mapContainer, {
              center: response.data.results[0].geometry.location,
              zoom: 9
            })
            var marker = new window.google.maps.Marker({
              map: map,
              position: map.center,
              label: "You are here",


            })
            var infoWindow = new window.google.maps.InfoWindow({
              content: '<p>You Are Here</p>'
            })



            marker.addListener('click', function() {
              infoWindow.open(map, marker)
            })
            arr.forEach(function(cur) {
              var markerContent = '<h1>' + cur.RecAreaName + '</h1><br><p>' + cur.RecAreaDescription + '</p><br><p>' +
              cur.RecAreaPhone + '</p>'
              // var markerContent = '<info-window-directive name="cur.RecAreaName" description="cur.RecAreaDescription"></info-window-directive>'
              var curInfoWindow = new window.google.maps.InfoWindow({
                content: markerContent

              })


              var curMarker = new window.google.maps.Marker({
                map: map,
                position: {
                  lat: cur.RecAreaLatitude,
                  lng: cur.RecAreaLongitude,



                },
                // label: cur.RecAreaName,
                animation: google.maps.Animation.DROP


              })
              curMarker.addListener('click', function() {
                curInfoWindow.open(map, curMarker,)
              })

            })
            google.maps.event.addListener(map, "bounds_changed", function(){
              var newMap = document.getElementById("map")
              newMap.style.borderRadius = "40px";
              newMap.style.border = "5px solid #6C5C14"
              newMap.style.boxShadow = "0 0 3pt 3pt #6C5C14"
            });
            return map;
          })
          return map;
      })
  }



  this.getAddress = function(address) {
    return $http({
      method: "Get",
      url: 'https://ridb.recreation.gov/api/v1/recareaaddresses/?apikey=444A9788754B43C8A5FE062FBBC3E603'
    }).then(function(res) {})
  }
})

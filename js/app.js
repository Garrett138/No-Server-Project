angular.module("myApp", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('home',{
        url:'/',
        templateUrl: "home.html",
        controller: 'mainCtrl'
      })
      .state('map', {
        url:'/map/:zip',
        templateUrl: "map.html",
        controller: "mapCtrl"
      })
      .state('moreInfo', {
        url: '/moreInfo/',
        templateUrl: "moreInfo.html",
        controller:"infoCtrl"
      })
      .state('footBar', {
        url: '/footBar/',
        templateUrl: "footBar.html",
        
      })
      $urlRouterProvider
            .otherwise('/');
    });




// var mapContainer = document.getElementById("map")
// var map = new window.google.maps.Map(mapContainer, {
//   center: {lat: 32.7777065 , lng: -96.795446 },
//   zoom: 5
// })
//
// var marker = new window.google.maps.Marker({
//   map: map,
//   position: map.center,
//   label: "Here"
// })
//
// var infoWindow = new window.google.maps.InfoWindow({
//   content: '<h1>Some Park</h1>'
// })
// marker.addListener('click', function() {
//   infoWindow.open(map, marker)
// })

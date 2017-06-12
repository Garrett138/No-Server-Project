angular.module("myApp").controller("mapCtrl", function($scope, $stateParams, service) {
  service.searchZip($stateParams.zip)
})

angular.module("myApp").controller("mapCtrl", function($scope, $stateParams, service){
  $scope.searchZip = function(zip) {
    service.searchZip(zip)
  }
  $scope.searchZip($stateParams.zip)
})

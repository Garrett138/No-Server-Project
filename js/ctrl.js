angular.module('myApp').controller('mainCtrl', function($scope, $state, service) {

  $scope.parks = service.recData;
  $scope.goToMap = function(zipCode) {
    $state.go("map", {zip: zipCode})
  }

})

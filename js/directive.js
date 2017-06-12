angular.module("myApp").directive("backButton", function (){
    return {
      templateUrl: 'backButton.html'

    }
})

.directive("footBar", function(){
  return {
    templateUrl: 'footBar.html'
  }
})

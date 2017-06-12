angular.module('myApp').directive('infoWindowDirective', function() {
  return {
    template: '<h1>Name{{name}}</h1><p>{{description}}</p>',
    scope: {
      name: "=",
      description: "="
    }
  }
})

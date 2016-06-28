var app = angular.module('routeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .when('/work', {
      templateUrl: 'views/work.html',
      controller: 'WorkController'
    });
    $locationProvider.html5Mode(true);

}]);
app.controller('HomeController', ['$scope', function($scope) {

}]);

app.controller('AboutController', ['$scope', function($scope) {

}]);

app.controller('WorkController', ['$scope', function($scope) {

}]);

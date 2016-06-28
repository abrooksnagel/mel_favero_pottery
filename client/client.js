var app = angular.module('routeApp', ['ngRoute', 'ngAnimate']);

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
    })
    .when('/shop', {
      templateUrl: 'views/shop.html',
      controller: 'ShopController'
    });
    $locationProvider.html5Mode(true);

}]);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.slides = [
      {image: 'images/IMG_5481.JPG', description: 'Image 00'},
      {image: 'images/IMG_5471.JPG', description: 'Image 01'},
      {image: 'images/IMG_5477.JPG', description: 'Image 02'},
      {image: 'images/IMG_5501.JPG', description: 'Image 03'},
      {image: 'images/Melissa_2.jpg', description: 'Image 04'}
  ];
}]);

app.controller('AboutController', ['$scope', function($scope) {

}]);

app.controller('WorkController', ['$scope', function($scope) {

}]);

app.controller('ShopController', ['$scope', function($scope) {

}]);

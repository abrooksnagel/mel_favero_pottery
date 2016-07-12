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
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    });
    $locationProvider.html5Mode(true);

}]);



app.controller('HomeController', ['$scope', function($scope) {
  /*This will be used for an image fader*/
  // $scope.slides = [
  //     {image: 'images/IMG_5471.JPG', description: 'Image 00'},
  //     {image: 'images/IMG_5481.JPG', description: 'Image 01'},
  //     {image: 'images/IMG_5477.JPG', description: 'Image 02'},
  //     {image: 'images/IMG_6093.JPG', description: 'Image 03'},
  //     {image: 'images/Melissa_1.jpg', description: 'Image 04'},
  //     {image: 'images/IMG_5500.JPG', description: 'Image 05'}
  // ];

}]);

app.controller('AboutController', ['$scope', function($scope) {

}]);

app.controller('WorkController', ['$scope', function($scope) {

}]);

app.controller('ShopController', ['$scope', function($scope) {

}]);

app.controller('ContactController', ['$scope', function($scope) {

}]);

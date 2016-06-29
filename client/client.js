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
  //((((((((((((((((((((((((()))))))))))))))))))))))))
  //             this code is untested
  //((((((((((((((((((((((((()))))))))))))))))))))))))
  $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

}]);



app.controller('AboutController', ['$scope', function($scope) {

}]);

app.controller('WorkController', ['$scope', function($scope) {

}]);

app.controller('ShopController', ['$scope', function($scope) {

}]);

app.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
                } else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');
                TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });
                } else {
                done();
                }
              }
        };
});

angular.module('barap', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('landingPage', {
      url: '/landingpage',
      templateUrl: '../Views/Landing/landing.html',
      controller: 'landingController'
    })

$urlRouterProvider
      .otherwise('/landingpage')

})

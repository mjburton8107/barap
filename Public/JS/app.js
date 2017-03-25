angular.module('barap', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('landingPage', {
      url: '/landingpage',
      templateUrl: '../Views/Landing/landing.html',
      controller: 'landingController'
    })
    .state('contactPage', {
      url: '/contactpage',
      templateUrl: '../Views/Contact/contact.html',
      controller: 'contactController'
    })
    .state('shopPage', {
      url: '/shop',
      templateUrl: '../Views/Shop/shop.html',
      controller: 'shopController'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: '../Views/Cart/cart.html',
      controller: 'cartController'
    })


$urlRouterProvider
      .otherwise('/landingpage')

})

angular.module('barap').controller('shopController', function($scope, productService){

  // $scope.test = "shop angular is working"

  (function () {
    console.log(document.getElementById('mygallery'))
    'use strict';
    Gallery.init(document.getElementById('mygallery'));
  }());

  $scope.addToCart = function(){
    return productService.addToCart();
  };

})

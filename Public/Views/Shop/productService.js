angular.module('barap').service('productService', function($http){

  this.addToCart(item){
    return $http({
      method: 'GET',
      url: "/api/products",
    })
  }

});

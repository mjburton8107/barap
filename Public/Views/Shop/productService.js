angular.module('barap').service('productService', function($http){

  this.addToCart = function(){
    return $http({
      method: 'GET',
      url: "/api/product",
    }).then((response) => {
        this.product = response.data[0];
        console.log("this is this.product[0]", this.product)
        return response
      })
  }

});

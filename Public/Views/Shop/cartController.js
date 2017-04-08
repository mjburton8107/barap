angular.module('barap').controller('cartController', function($scope, productService){

  $scope.product = productService.product

  console.log('this is $scope.product', $scope.product)

  // $scope.price = productService.product.price;
  // $scope.productName = productService.product.product_name;
  //
  // console.log('this is scope.productName', $scope.productName);
  // console.log('this is scope.price', $scope.price);

})

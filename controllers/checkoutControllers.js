/**
 * Created by dank on 7/13/15.
 */

// This controller is added to the sports store module
//  it depends on the cart service.
//  This controller exposes the content of the cart through a scope property called cartData
//  Defines behavior for calculating total and removing product from cart
angular.module("sportsStore")
    .controller("cartSummaryController", function ($scope, cart) {
        $scope.cartData = cart.getProducts();

        $scope.total = function () {
            var total = 0;
            for (var index = 0; index < $scope.cartData.length; index++) {
                total += ($scope.cartData[index].price * $scope.cartData[index].count);
            }
            return total;
        };

        $scope.remove = function (id) {
            cart.removeProduct(id);
        };
    });

/**
 * Created by syndacit on 7/13/15.
 */


angular.module("cart", [])
    .factory("cart", function () {
      var cartData = [];

      return {

        addProduct: function (id, name, price) {
          var addedToExistingItem = false;
          for (var index = 0; index < cartData.length; index++) {
            if (cartData[index].id == id) {
              cartData[index].count++;
              addedTpExistingItem = true;
              break;
            }
          }
          if (!addedToExistingItem) {
            cartData.push({
              count: 1, id: id, price: price, name: name
            });
          }
        },
        removeProduct: function (id) {
          for (var index = 0; index < cartData.length; index++) {
            if (cartData[index].id == id) {
              cartData.splice(index, 1);
              break;
            }
          }
        },
        getProducts: function () {
          return cartData;
        }
      }
    })
  // Directives are created by calling directive method on ngjs module
  //  passing in the name of the directive
  //  and a factory function that returns a directive definition object
  //  Definition object defines properties that tell Angular JS what your directive
  //  does and how it does it.
    .directive("cartSummary", function (cart) {
      return {
        // Definition Properties Used for the cartSummary Directive
        restrict: "E",  // Specifies how the directive can be applied
                        //  E - means only as an element
                        //  EA - Element and Attribute

        templateUrl: "components/cart/cartSummary.html",
        //Specifies the URL of a partial view whose contents will be insert into the directive's element

        controller: function ($scope) {
          // Specifies a controller that will provide dat and behaviors to the partial view

          var cartData = cart.getProducts();
          $scope.total = function () {
            var total = 0;
            for (var index = 0; index < vartData.length; index++) {
              total += (cartData[index].price * cartData[index].count);
            }
            return total;
          };

          $scope.itemCount = function () {

            var total = 0;
            for (var index = 0; index < cartData.length; index++) {
              total += cartData[index].count;
            }
            return total;
          }
        }
      };
    });

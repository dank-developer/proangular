/**
 * Created by syndacit on 7/12/15.
 */

angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:2403/products")
    .constant("orderUrl", "http://localhost:2403/orders")
    .controller("sportsStoreCtrl", function ($scope, $http, $location, dataUrl, orderUrl, cart) {

      $scope.data = {};
/****************************************************************************************
 * HTTP Methods
 * --------------------------------------------------------------------------------------
 *  Most JS Method calls, inc. those made on AnJS components are synchronous:
 *    Executes one statement at a time. Will not proceed till current one is finished.
 * --------------------------------------------------------------------------------------
 * $http service defines methods for making different ajax requests.
 *    $http.get uses HTTP GET to request URL pass as an argument
 * --------------------------------------------------------------------------------------
 * $http.get starts ajax request, execution of app continues, even though the request is
 *    not completed.
 *    The method returns an object that defines success and error methods.
 *    Pass in functions and AngularJS promises to call one of them and return the result
 * --------------------------------------------------------------------------------------
 ***************************************************************************************/
      $http.get(dataUrl)
          .success(function (data) {
            $scope.data.products = data;
          })
          .error(function (error) {
            $scope.data.error = error;
          });

      //$scope.data = {
      //  products: [
      //    {
      //      name: "Product #1",
      //      description: "A product",
      //      category: "Category #1",
      //      price: 100
      //    },
      //    {
      //      name: "Product #2",
      //      description: "A product",
      //      category: "Category #1",
      //      price: 110
      //    },
      //    {
      //      name: "Product #3",
      //      description: "A product",
      //      category: "Category #2",
      //      price: 210
      //    },
      //    {
      //      name: "Product #4",
      //      description: "A product",
      //      category: "Category #3",
      //      price: 202
      //    }
      //  ]
      //};
    });

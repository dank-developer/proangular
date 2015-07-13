/************************************************************
 * -------------------------------------------------------
 * Created by syndacit on 7/12/15.
 * -------------------------------------------------------
 *************************************************************/

// call controller method on sportsStore module that is defined in the app.html
//  recall :  1: Argument to angular.module method means find existing module
//            2: Create new
angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3) // Constant that defines number of products
                                         // shown on a page
    .controller("productListCtrl",
    function ($scope, $filter, productListActiveClass, productListPageCount, cart) {

      // selectedCategory is not defined on the scope, it's a regular JS var
      //  it cannot be accessed from directives or data bindings in the view
      var selectedCategory = null;

      $scope.selectedPage = 1;
      // Define variables on the scope that expose the constant value
      //  Allows access in the view and currently selected page
      $scope.pageSize = productListPageCount;

      $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
      };

      $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
      };
      $scope.categoryFilterFn = function (product) {
        return selectedCategory == null ||
            product.category == selectedCategory;
      };

      // Gets called by ea. category navigation buttons, ea. pass pass in name as argument
      $scope.getCategoryClass = function (category) {
        // compares selected cat vs. parameter
        //  returns productListActiveClass if true, else ""
        return selectedCategory == category ? productListActiveClass : "";
      };

      $scope.getPageClass = function (page) {
        return $scope.selectedPage == page ? productListActiveClass : "";
      };
      $scope.addProductToCart = function (product) {
        cart.addProduct(product.id, product.name, product.price);
      };
    });


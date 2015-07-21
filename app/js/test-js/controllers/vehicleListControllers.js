/**
 * Created by dank on 7/15/15.
 */


'use strict';
angular.module("commandCenter")
    .constant("vehicleListActiveClass", "btn-primary")
    .constant("vehicleListPageCount", 3)
    .controller("vehicleListCtrl", function ($scope, $filter, vehicleListActiveClass, vehicleListPageCount) {
        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = vehicleListPageCount;


        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;

        };
        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        };

        $scope.categoryFilterFn = function (vehicle) {
            //return angular.isUndefined(selectedCategory)|| vehicle.category == selectedCategory;
            return selectedCategory === null || vehicle.category == selectedCategory;
        };

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? vehicleListActiveClass : "";
        };

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? vehicleListActiveClass : "";
        };
    });

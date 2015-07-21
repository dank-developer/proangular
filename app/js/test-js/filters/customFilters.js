/***********************************************************************************************************************
 *
 * CUSTOM FILTERS
 * _____________________________________________________________________________________________________________________
 *
 * Created by dank on 7/15/15.
 * _____________________________________________________________________________________________________________________
 *
 *
 *
 *
 *
 * _____________________________________________________________________________________________________________________
 *
 *
 *
 *
 *
 *
 *
 **********************************************************************************************************************/
'use strict';
angular.module("customFilters", [])
    .filter("unique", function () {
        return function (data, propertyName) {
            if (angular.isArray(data) &&angular.isString(propertyName)) {
                var results = [];
                var keys = {};
                for (var index = 0; index < data.length; index++) {
                    var dataValue = data[index][propertyName];
                    if (angular.isUndefined(keys[dataValue])) {
                        keys[dataValue] = true;
                        results.push(dataValue);
                    }
                }
                return results;
            } else {
                return data;
            }

        };
    })
    .filter("range", function ($filter) {
        return function (data, page, size) {
            if (angular.isArray(data) &&angular.isNumber(page) &&angular.isNumber(size)) {
                var start_index = (page - 1) * size;
                if (data.length < start_index) {
                    return [];
                }
                else {
                    return $filter("limitTo")(data.splice(start_index), size);
                }
            } else {
                return data;
            }
        };
    })
    .filter("pageCount", function () {
        return function (data, size) {
            if (angular.isArray(data)) {
                var result = [];
                for (var index = 0; index < Math.ceil(data.length / size); index++) {
                    result.push(index);
                }
                return result;
            } else {
                return data;
            }
        };
    });

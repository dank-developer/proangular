/**************************************************************
 *
 * Custom Filters
 * ProAngular
 * Listing 6-4
 *
 * ------------------------------------------------
 * This is how customer filters are made,
 * - global call to angular.module
 * customFilters - name of the module
 * ------------------------------------------------
 * Created by syndacit on 7/12/15.
 ************************************************************/

angular.module("customFilters"/* Name of Module */, [] /* Dependencies */)
    .filter("unique", function ()
      // unique - name of filter, with a factory function call with no parameters
    {
      //
      return function (data, propertyName) {
        // Checks if the data is an array and that propertyName is a string
        // {{ data | unique::'string' }}
        if (angular.isArray(data) && angular.isString(propertyName)) {
          var results = [];
          var keys = {};
          for (var index = 0; index < data.length; index++) {
            var val = data[index][propertyName];
            // will check if property have been defined using .isUnd...()
            if (angular.isUndefined(keys[val])) {
              keys[val] = true;
              results.push(val);
            }
          }
          // If filter received an array & property name, generate and return
          //  array of the unique property values.

          return results;
        } else {
          // Else return data unmodified
          return data;
        }
      };
    })
    /*********************************************************************************
     * Range
     * -------------------------------------------------------------------------------
     * Returns:
     *  Range of elements from an array, corresponding to a page of products
     * Arguments:
     *  (Currently selected) page - used to determine the start index of range
     *                (page) size - Determine the end index
     * -------------------------------------------------------------------------------
     * Built upon built-in filters: limitTo (returns up to a specified number of items
     *                                        from an array)
     * To use limitTo - declare dependency on $filter service, allows creation and use
     *  of filter.
     *********************************************************************************/
    .filter("range", function ($filter) {
      return function (data, page, size) {
        if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
          var start_index = (page - 1) * size;
          if (data.length < start_index) {
            return [];
          } else {
            // Use splice to select part of data array then pass to limitTo filter to
            //  select no more than allowed # of items on the page
            return $filter("limitTo")(data.splice(start_index), size);
          }
        } else {
          return data;
        }
      };
    })
  // Convenient but a dirty hack. Ng-repeat makes it easy to generate content, but only
  //    works on arrays.
  // **** This is abuse of filter functionality, workaround limitation of ng-repeat.
  // Better alt. - create custom replacement for ng-repeat that generates specific #
  // elements
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

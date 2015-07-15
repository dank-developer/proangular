angular.module("sportStoreAdmin")
    .constant("authUrl", "http://localhost:8005/users/login")
    .controller("authCtrl", function ($scope, $http, $location, authUrl) {

        $scope.authenticate = function (user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredentials: true
            }).success(function (data) {
                $location.path("/main");
            }).error(function (error) {
                $scope.authenticationError = error;
            });
        };
    });
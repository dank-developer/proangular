/**
 * Created by dank on 7/15/15.
 */


'use strict';

angular.module("commandCenter")
    .controller("videoCtrl", function ($scope) {

        $scope.hasVideo = function (vehicle) {
            return vehicle.videoUrl !== "";
        };


        $scope.getVideoUrl = function (vehicle) {

            if ($scope.hasVideo(vehicle)) {
                return vehicle.videoUrl;
            } else {
                return null;

            }
        };


    });

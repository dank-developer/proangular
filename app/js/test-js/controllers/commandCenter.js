'use strict';
angular.module("commandCenter")
    .controller("commandCenterCtrl", function ($scope) {
        $scope.data = {
            vehicles: [
                {
                    name: "Heat Flux",
                    category: "Fairing Thermal Environment",
                    description: "Heat transfered from the outside of the fairing to the internal environment" +
                    " : Payload Fairing Wall <536 W/m^2",
                    diameter: null,
                    length: null,
                    videoUrl: "https://europaems.jpl.nasa.gov/share/proxy/alfresco/api/node/content/workspace/SpacesStore/324a1d2b-f377-4ee9-a20d-7dca10b8ae75/fairing%20mate%20mike640x480.m4v"
                }, {
                    name: "SV Heat Dissipation",
                    category: "Fairing Thermal Environment",
                    description: "Heat transferred from the spacecraft to its surroundings.",
                    diameter: null,
                    length: null,
                    videoUrl: ""
                }, {
                    name: "ECS Impingement Velocity",
                    category: "Fairing Thermal Environment",
                    description: "Environment Control System, (AC)",
                    diameter: null,
                    length: null,
                    videoUrl: ""
                },
                {
                    name: "Free Molecular Heating",
                    category: "Fairing Thermal Environment",
                    description: "Thermal energy imparted by external molecular friction forces",
                    diameter: null,
                    length: null,
                    videoUrl: ""
                }
            ]
        };
    });


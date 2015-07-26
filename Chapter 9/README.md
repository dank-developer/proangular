# AngularJS Examples
_______
## Overview 
_______
Problem  |  Solution | Example 
:-------- |:------ |:----------
Create an AngularJS module | 'Use the angular.module method' | 1, 2
Set the scope of a module. | 'Use the ng-app attribute' |  3
Define a controller. | 'Use the module.controller method' | 4, 8
Apply a controller to a view. | 'Use the ng-controller attribute' |  5, 7
Pass data from a controller to a view. | 'Use the $scope service' |  6
Define a directive. | 'Use the module.directive method' |  9
Define a filter. | 'Use the module.filter method' |  10
Use a filter programmatically | 'Use the $filter service' |  11
Define a service. | 'Use the module.service, module.factory, or module.provider method' | 12
Define a service from an existing object or value. | 'Use the module.value method' | 13
Add structure to the code in an application. | 'Create multiple modules and declare dependencies from the module referenced by the ng-app attribute' | 14-16
Register functions that are called when modules are loaded. | 'Use the module.config and module.run methods' | 17

### Creating a Module

#### Example: 2 

    var myAp = angular.module("exampleApp", [])

_______

Modules are the top-level components for AngularJS Apps.
Purpose:


>    1. Associate an app with a region of an HTML document
>    2. Act as a gateway to AngularJS framework features
>    3. Help organize the code and components in an AngularJS application


Table 2 Arguments Accepted by the angular.module metho

Name | Descriptions
:-----|:-------
name | The name of the new module
requires | The set of modules that this module depends on
config | The configuration for the module, equivalent to calling module.config method

Convention is to give the module a name with the suffix App this makes it clear which module represents the top-level 
AngularJS application in your code structure. 

        exampleApp
        <html ng-app="exampleApp">
        
When creating a module, you must specify the name and requires arguments, even if the module
has no dependencies.
        
        
**Example: 3**

        ...
        var myApp = angular.module("exampleApp");
        ...
        
*Angular will try to locate a previously create module called exampleApp: results in an error*
________

## Using Modules to Define AngularJS Components
> angular.module method returns a module object that provides access to important features that AngularJS provides via the properties and methods.

### Members of the Module Object

_________

Name | Description
:-----|:------
animation(name, factory) | Supports the animation feature
config(callback) | Registers a function that can be use to configure a module when it is loaded.
constant(key, value) | Defines a service that returns a constant value.
controller(name, constructor) | Creates a controller
directive(name, factory) | Creates a directive, which extends teh standard HTML vocabulary.
factory(name, provider) | Creates a service (different than provider and service.)
filter(name, factory) | Creates a filter that formats data for display to the user.
provider(name, type) | Creates a service 
name | Returns the name of a module.
run(callback) | Registers a function that is invoked after AngularJS has loaded and configured all of the modules.
service(name, constructor) | Creates a service
value (name, value) | Defines a service that returns a constant value

__________


## Defining Controllers

Building blocks of an AngularJS application, controllers are the connection between the model and the views.

Defined using module.controller
Takes two arguments: 

1. Name of the Controller 
2. Factory Function:

        a. Used to setup the controller
        b. Get it ready for use
         
**Example: 4**

        ...
        myApp.controller("dayCtrl", function ($scope) {
            // Controller states will go here
        });
        ...  
        
Statement creates a new controller called dayCtrl, the function that is passed is used to declare
the controller's dependencies. These dependencies are the AngularJS components that the controller requires.
Passing $scope into the function tells Angular to provide the scope for the controller, this declares a 
dependency on $scope. 

This is an example of _dependency injection (DI)_

myApp.controller needs to use the $scope component to pass data to the view, it depends on the $scope component.
AngularJS manages the components and supplies them when needed.

## Apply Controllers to Views

To apply a controller to HTML, us the ng-controller attribute.

#### Example 5
    ...
    <body>
      <div class="panel" ng-controller="dayCtrl">          ---
        <div class="page-header">                           |
          <h3>AngularJS App</h3>                            |
        </div>                                              |
        <h4>Today is {{ day || "(unknown)" }}</h4>          |
      </div>                                               ---
    </body>                                        Scope of controller
    ...
        
        
#### Example 6
    <script> 
        var myApp = angular.module("exampleApp", []);
     
        myApp.controller("dayCtrl", function($scope){
            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            $scope.day = dayNames [new Date().getDay()];
        }); 
    </script> 
    
## Creating Multiple Views

Controllers can support multiple views, allows data to be presented or manipulated differently.

#### Example: 7
    <!DOCTYPE html>
    <html ng-app="exampleApp">
    <head>
        <title>AngularJS Demo</title>
        <link href="bootstrap.css" rel="stylesheet"/>
        <link href="bootstrap-theme.css" rel="stylesheet"/>
        <script src="angular.js"></script>
        <script>
        var myApp = angular.module("exampleApp", []);
     
        myApp.controller("dayCtrl", function($scope){
        
            var dayNames = ["Sunday", "Monday", "Tuesday", 
                            "Wednesday", "Thursday", "Friday", 
                            "Saturday"];
                            
            $scope.day = dayNames [new Date().getDay()];
            $scope.tomorrow = dayNames [(new Date().getDay() + 1) % 7];
        }); 
    </script> 
    
    <body>
      <div class="panel" ng-controller="dayCtrl">
        <div class="page-header">
          <h3>AngularJS App</h3>
        </div> 
        <h4>Today is {{ day || "(unknown)" }}</h4>
        <h4 ng-controller="dayCtrl">Tomorrow is {{ tomorrow || "(unknown)" }} </h4>
      </div>
    </body>
    </html>
    
    
#### Example 8
* Modification to example 7
* Demonstrating the use of multiple controllers

    ...
    myApp.controller("tomorrowCtrl", function($scope){
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.day = dayNames [(new Date().getDay() + 1) % 7];
     });
    ...
    </div>

    ...
    
    
        <!DOCTYPE html>
    <html ng-app="exampleApp">
    <head>
        <title>AngularJS Demo</title>
        <link href="bootstrap.css" rel="stylesheet"/>
        <link href="bootstrap-theme.css" rel="stylesheet"/>
        <script src="angular.js"></script>
        <script>
        var myApp = angular.module("exampleApp", []);
     
        myApp.controller("dayCtrl", function($scope){
        
            var dayNames = ["Sunday", "Monday", "Tuesday", 
                            "Wednesday", "Thursday", "Friday", 
                            "Saturday"];
                            
            $scope.day = dayNames [new Date().getDay()];
            $scope.tomorrow = dayNames [(new Date().getDay() + 1) % 7];
        }); 
    </script> 
    
    <body>
      <div class="panel" ng-controller="dayCtrl">
        <div class="page-header">
          <h3>AngularJS App</h3>
        </div> 
                <h4 ng-controller="dayCtrl">Today is {{ day || "(unknown)"}}</h4>
        <h4 ng-controller="tomorrowCtrl">Tomorrow is {{ day || "(unknown)"}}</h4>
      </div>
    </body>
    </html>
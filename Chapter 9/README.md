# Chapter 9 Summary 
_______
## Ref#1
_______
Problem  |  Solution |  Listing
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

## ref 2 
####Creating a Module
_______

var myAp = angular.module("exampleApp", [])

_______

Modules are the top-level components for AngularJS Apps.
Purpose:


>    1. Associate an app with a region of an HTML document
>    2. Act as a gateway to AngularJS framework features
>    3. Help organize the code and components in an AngularJS application


Table 9-2 Arguments Accepted by the angular.module metho

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
        
        ...
        var myApp = angular.module("exampleApp");
        ...
        
*Angular will try to locate a previously create module called exampleApp: results in an error*
________

## Using Modules to Define AngularJS Components
> angular.module method returns a module object that provides access to the most important features that AngulaJS 
> provides via the properties and methods.

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

> Defined using module.controller
> Takes two arguments: 
        1) 

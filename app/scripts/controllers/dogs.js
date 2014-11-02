'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:DogsCtrl
 * @description
 * # DogsCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('DogsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

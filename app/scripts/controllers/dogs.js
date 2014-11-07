'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:DogsCtrl
 * @description
 * # DogsCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('DogsCtrl', ['$scope', 'dogs', '$filter', function ($scope, dogs, $filter) {
    dogs.loadJSON("data/dogs_by_breeds.json").then(function (a) {
      $scope.breedData = a.data.results;
    })
  }]);

'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:DogsCtrl
 * @description
 * # DogsCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
.controller('DogsCtrl', ['$scope', 'dogs', function ($scope, dogs) {
    dogs.loadJSON('data/dogs_by_breeds.json').then(function (a) {
        $scope.breedData = a.data.results;
    });
}]);

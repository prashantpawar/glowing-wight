'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.dogs
 * @description
 * # dogs
 * Service in the workspaceApp.
 */
angular.module('workspaceApp')
  .service('dogs', ['ngResource', function dogs($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return "he";
  }]);

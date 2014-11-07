'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.dogs
 * @description
 * # dogs
 * Service in the workspaceApp.
 */
angular.module('workspaceApp')
  .service('dogs', ['$http', function dogs($http) {
    var _loadJSON = function (url) {
      return $http.get(url);
    };
    return {
      loadJSON:_loadJSON
    };
  }]);

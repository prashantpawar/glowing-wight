'use strict';

describe('Controller: DogsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var DogsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DogsCtrl = $controller('DogsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

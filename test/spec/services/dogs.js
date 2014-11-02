'use strict';

describe('Service: dogs', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var dogs;
  beforeEach(inject(function (_dogs_) {
    dogs = _dogs_;
  }));

  it('should do something', function () {
    expect(!!dogs).toBe(true);
  });

});

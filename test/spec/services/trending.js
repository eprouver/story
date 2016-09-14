'use strict';

describe('Service: trending', function () {

  // load the service's module
  beforeEach(module('adventureApp'));

  // instantiate service
  var trending;
  beforeEach(inject(function (_trending_) {
    trending = _trending_;
  }));

  it('should do something', function () {
    expect(!!trending).toBe(true);
  });

});

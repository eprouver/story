'use strict';

describe('Service: testPage', function () {

  // load the service's module
  beforeEach(module('adventureApp'));

  // instantiate service
  var testPage;
  beforeEach(inject(function (_testPage_) {
    testPage = _testPage_;
  }));

  it('should do something', function () {
    expect(!!testPage).toBe(true);
  });

});

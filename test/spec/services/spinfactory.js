'use strict';

describe('Service: spinFactory', function () {

  // load the service's module
  beforeEach(module('netRouletteApp'));

  // instantiate service
  var spinFactory;
  beforeEach(inject(function (_spinFactory_) {
    spinFactory = _spinFactory_;
  }));

  it('should do something', function () {
    expect(!!spinFactory).toBe(true);
  });

});

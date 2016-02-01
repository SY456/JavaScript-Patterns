'use strict';

describe('Service: RepositoryFactory', function () {

  // load the service's module
  beforeEach(module('patternsApp'));

  // instantiate service
  var RepositoryFactory;
  beforeEach(inject(function (_RepositoryFactory_) {
    RepositoryFactory = _RepositoryFactory_;
  }));

  it('should do something', function () {
    expect(!!RepositoryFactory).toBe(true);
  });

});

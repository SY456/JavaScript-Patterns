'use strict';

describe('Service: UserRepository', function () {

  // load the service's module
  beforeEach(module('patternsApp'));

  // instantiate service
  var userRepository;
  beforeEach(inject(function (_userRepository_) {
    userRepository = _userRepository_;
  }));

  it('should do something', function () {
    expect(!!userRepository).toBe(true);
  });

});

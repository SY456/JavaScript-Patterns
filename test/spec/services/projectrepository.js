'use strict';

describe('Service: ProjectRepository', function () {

  // load the service's module
  beforeEach(module('patternsApp'));

  // instantiate service
  var ProjectRepository;
  beforeEach(inject(function (_ProjectRepository_) {
    ProjectRepository = _ProjectRepository_;
  }));

  it('should do something', function () {
    expect(!!ProjectRepository).toBe(true);
  });

});

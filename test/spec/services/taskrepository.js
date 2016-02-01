'use strict';

describe('Service: TaskRepository', function () {

  // load the service's module
  beforeEach(module('patternsApp'));

  // instantiate service
  var TaskRepository;
  beforeEach(inject(function (_TaskRepository_) {
    TaskRepository = _TaskRepository_;
  }));

  it('should do something', function () {
    expect(!!TaskRepository).toBe(true);
  });

});

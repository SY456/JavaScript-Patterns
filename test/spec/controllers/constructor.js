'use strict';

describe('Controller: ConstructorCtrl', function () {

  // load the controller's module
  beforeEach(module('patternsApp'));

  var ConstructorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConstructorCtrl = $controller('ConstructorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConstructorCtrl.awesomeThings.length).toBe(3);
  });
});

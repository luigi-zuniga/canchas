'use strict';

describe('Controller: CanchasCtrl', function () {

  // load the controller's module
  beforeEach(module('canchasApp'));

  var CanchasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CanchasCtrl = $controller('CanchasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CanchasCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Service: constantes', function () {

  // load the service's module
  beforeEach(module('canchasApp'));

  // instantiate service
  var constantes;
  beforeEach(inject(function (_constantes_) {
    constantes = _constantes_;
  }));

  it('should do something', function () {
    expect(!!constantes).toBe(true);
  });

});

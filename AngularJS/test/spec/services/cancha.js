'use strict';

describe('Service: cancha', function () {

  // load the service's module
  beforeEach(module('canchasApp'));

  // instantiate service
  var cancha;
  beforeEach(inject(function (_cancha_) {
    cancha = _cancha_;
  }));

  it('should do something', function () {
    expect(!!cancha).toBe(true);
  });

});

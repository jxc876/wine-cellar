'use strict';

describe('Controller: WineCtrl', function () {

  // load the controller's module
  beforeEach(module('wineCellarApp'));

  var WineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WineCtrl = $controller('WineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.wineList.length).toBe(4);
  });
});

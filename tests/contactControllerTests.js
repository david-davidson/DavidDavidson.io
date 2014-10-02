'use strict';

console.log('hello');

require('../app/app.js');
require('angular-mocks');

describe('/contact controllers', function() {
  var $controllerConstructor,
	  $httpBackend,
	  scope;

  beforeEach(angular.mock.module('Portfolio'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should able to create a new controller', function() {
    var contactController = $controllerConstructor('contactController', {$scope: scope });
    expect(typeof contactController).toBe('object');
    expect(1 === 1).toBe(true);
  });
});

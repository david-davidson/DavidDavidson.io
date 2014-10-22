'use strict';

require('../../app/app.js');
require('angular-mocks');

describe('The "Kind words" controller', function() {
  var $controllerConstructor,
	  scope,
    sliderController,
    interval;

  beforeEach(angular.mock.module('Portfolio'));

  beforeEach(angular.mock.inject(function($controller, $rootScope, $interval) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
    interval = $interval;
    sliderController = $controllerConstructor('sliderController', 
      { $scope: scope });
  }));

  afterEach(function() {
    scope.timer = 0;
  });

  it('Has a working one-second timer', function() {
    expect(scope.timer).toEqual(0);
    interval.flush(1000);
    expect(scope.timer).toEqual(1);
    interval.flush(1000);
    expect(scope.timer).toEqual(2);
  });

  it('Watches the timer, and reveals slides according to a set frequency', function() {
    interval.flush(scope.frequency * 1000); // currently, 15 seconds
    expect(scope.index).toEqual(1);
  });

  it('Resets the timer when a slide ticks over', function() {
    interval.flush(scope.frequency * 1000);
    expect(scope.timer).toEqual(0);
  });

  it('Ticks from the last slide back to the first', function() {
    interval.flush(scope.frequency * 1000 * scope.testimonials.length);
    expect(scope.index).toEqual(0); // b/c it's come full circle
  });

  it('Lets users specify a slide to reveal', function() {
    scope.activate(1);
    expect(scope.index).toEqual(1);
  });

  it('Resets the timer when a user chooses a slide', function() {
    interval.flush(1000);
    expect(scope.timer).toEqual(1); // Still 14 seconds short
    scope.activate(1);
    expect(scope.timer).toEqual(0);
  });

  it('Shows only the current slide', function() {
    for (var i = 0; i < scope.testimonials; i++) {
      if (i === scope.index) {
        expect(scope.testimonials[i].visible).toBe(true);
      } else {
        expect(scope.testimonials[i].visible).toBe(false);
      }
    }
  });

});
'use strict';

require('../../app/app.js');
require('angular-mocks');

describe('The /resume controller', function() {
	var $controllerConstructor,
		scope,
		resumeController;

	beforeEach(angular.mock.module('Portfolio'));

	beforeEach(angular.mock.inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		$controllerConstructor = $controller;
		resumeController = $controllerConstructor('resumeController', 
		{
			$scope: scope
		});
	}));

	it('Exposes my employment history as an array of objects', function() {
		expect(Array.isArray(scope.jobs)).toBe(true);
		expect(scope.jobs[0].title).toBeDefined();
		expect(scope.jobs[0].who).toBeDefined();
		expect(scope.jobs[0].details).toBeDefined();
		expect(scope.jobs[0].bullets).toBeDefined();
	});

	it('Provides an array of bullet points for each job', function() {
		expect(Array.isArray(scope.jobs[0].bullets)).toBe(true);
		expect(scope.jobs[0].bullets[0].bullet).toBeDefined();
	});

	it('Exposes my education history as an array of objects', function() {
		expect(Array.isArray(scope.schools)).toBe(true);
		expect(scope.schools[0].title).toBeDefined();
		expect(scope.schools[0].who).toBeDefined();
		expect(scope.schools[0].details).toBeDefined();
	});

});
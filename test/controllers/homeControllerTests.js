'use strict';

require('../../app/app.js');
require('angular-mocks');

describe('The home controller', function() {
	var $controllerConstructor,
		scope,
		homeController;

	beforeEach(angular.mock.module('Portfolio'));

	beforeEach(angular.mock.inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		$controllerConstructor = $controller;
		homeController = $controllerConstructor('homeController', 
		{
			$scope: scope
		});
	}));

	it('Exposes my (alleged) skills as an array of objects', function() {
		expect(Array.isArray(scope.skills)).toBe(true);
		expect(scope.skills[0].title).toBeDefined();
		expect(scope.skills[0].description).toBeDefined();
	});
});
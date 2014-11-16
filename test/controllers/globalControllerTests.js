'use strict';

require('../../app/app.js');
require('angular-mocks');

describe('The global controller', function() {
	var $controllerConstructor,
	scope,
	location,
	timeout,
	globalController;

	beforeEach(angular.mock.module('Portfolio'));

	beforeEach(angular.mock.inject(function($controller, $rootScope, $location, $timeout) {
		scope = $rootScope.$new();
		location = $location;
		timeout = $timeout;
		$controllerConstructor = $controller;
		globalController = $controllerConstructor('globalController', 
		{
			$scope: scope
		});
	}));

	it('Updates $scope.page and $scope.title on route change', function() {
		spyOn(location, 'path').andReturn('/resume');
		scope.$broadcast('$routeChangeSuccess');

		expect(location.path).toHaveBeenCalled();
		expect(scope.page).toEqual('resume');
		expect(scope.title).toEqual('R&eacute;sum&eacute; | David Davidson');
	});

	it('Exposes the current date, for use in the footer', function() {
		expect(scope.today).toEqual(new Date().getFullYear());
	});

	it('Lets the UI open the portfolio dropdown', function() {
		scope.openDropdown();
		expect(scope.dropdown).toBe(true);
	});

	it('Lets the UI close the portfolio dropdown, with a 750ms delay', function() {
		scope.openDropdown();
		scope.closeDropdown();
		expect(scope.dropdown).toBe(true);
		timeout.flush(750);
		expect(scope.dropdown).toBe(false);
	});
});
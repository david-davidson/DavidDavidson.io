'use strict';

require('../../app/app.js');
require('angular-mocks');

describe('The /portfolio controller', function() {
	var $controllerConstructor,
		scope,
		portfolioController,
		fakeData;

	fakeData = [
		{
			title: 'Fake data',
			description: 'So our tests won\'t fail when copy changes',
			technologies: [
				{
					bullet: 'Jasmine',
				},
				{
					bullet: 'AngularJS',
				}
			]
		}
	];

	beforeEach(angular.mock.module('Portfolio'));

	beforeEach(angular.mock.inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		$controllerConstructor = $controller;
		portfolioController = $controllerConstructor('portfolioController', 
		{
			$scope: scope
		});
	}));

	it('Exposes my copywriting portfolio as an array of objects', function() {
		expect(Array.isArray(scope.copy)).toBe(true);
		expect(scope.copy[0].title).toBeDefined();
		expect(scope.copy[0].description).toBeDefined();
		expect(scope.copy[0].url).toBeDefined();
	});

	it('Can access my dev portfolio as an array of objects', function() {
		expect(Array.isArray(scope.projects)).toBe(true);
		expect(scope.projects[0].title).toBeDefined();
		expect(scope.projects[0].description).toBeDefined();
		expect(scope.projects[0].technologies).toBeDefined();
		expect(scope.projects[0].image).toBeDefined();
		expect(scope.projects[0].url).toBeDefined();

	});

	it('Can access an array of technologies used in each dev project', function() {
		expect(Array.isArray(scope.projects[0].technologies)).toBe(true);
		expect(scope.projects[0].technologies[0].bullet).toBeDefined();
	});

	it('Exposes a filtered version of my dev portfolio', function() {
		expect(scope.filteredProjects).toBe(scope.projects);
	});

	it('Filters against user input', function() {
		scope.filteredProjects = scope.filterProjects(fakeData, 'Jasmine');
		expect(scope.filteredProjects.length).toEqual(1);
		scope.filteredProjects = scope.filterProjects(fakeData, 'WordPress');
		expect(scope.filteredProjects.length).toEqual(0);
		scope.filteredProjects = scope.filterProjects(fakeData, 'Jas');
		expect(scope.filteredProjects.length).toEqual(1);
	});

	it('Knows whether any projects are left after filtering', function() {
		expect(scope.noContentVisible()).toBe(false);
		scope.filteredProjects = [];
		expect(scope.noContentVisible()).toBe(true);
	});

});
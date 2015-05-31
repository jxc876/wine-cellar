'use strict';

/**
 * @ngdoc function
 * @name wineCellarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wineCellarApp
 */
angular.module('wineCellarApp')
  .controller('WineCtrl', function ($scope) {

  	$scope.wineList = [
  		{id: 1, name: 'Moscato White Wine', country: 'USA', region: 'Oregon', year: 2007, notes: ''},
  		{id: 2, name: 'Pinio Grigio', country: 'Italy', region: 'Sicily', year: 2010, notes: ''},
  		{id: 3, name: 'Radius Merlot', country: 'USA', region: 'Washington', year: 2008, notes: ''},
  		{id: 4, name: 'California Chardonnay', country: 'USA', region: 'California', year: 2012, notes: ''}
  		];

    $scope.wineFilter = '';
  	$scope.selectedWine = $scope.wineList[0];

  	$scope.selectWine = function(wine){
  		$scope.selectedWine = wine;
  	};

  });

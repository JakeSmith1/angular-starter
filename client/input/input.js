import angular from 'angular';

var input = angular.module('dailyInput', [])
  .controller('input', ['$scope', function($scope) {
    $scope.dailyData = {};
    $scope.onSubmit = function(valid) {console.log(valid)}
  }])
export default input;

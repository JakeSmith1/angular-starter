import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dailyInput from '../input/input.js';


angular.module('app', [uiRouter])
.controller('form', ['$scope', function($scope) {
  $scope.userdata = {};
  $scope.onSubmit = function(valid) {
    valid?console.log('valid ', $scope.userdata):console.log('invalid');
  }
}]).directive('usernameValidator', function($timeout, $q) {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.username = function(modelValue, viewValue) {
        if (scope.userdata.username.length > 5) {
          console.log("length greater than 5");
          return $q.resolve("length greater than 5");
        }
        var def = $q.defer();
        $timeout(function() {
          if (!scope.userdata.username) {
            console.log(modelValue, element, attrs, ngModel);
            element.class = 'danger'
            def.resolve();
          } else {
            def.reject();
          }
        }, 2000);

        return def.promise;
      };
    }
  };
})

(function () {
'use strict';

  var app = angular.module('LunchCheck', []);

  app.controller('LunchCheckController', function ($scope) {
    $scope.dishes = "";

    $scope.message = "";

    $scope.displayMessage = function () {
      $scope.message = checkNumber($scope.dishes);
      $scope.output = test($scope.dishes);

    };

    function checkNumber (string) {

      var arrayOfStrings = string.split(",");

      var length = arrayOfStrings.length;

      if (arrayOfStrings[0] == '') {
        return "Please Enter Data First!";
      } else if (length < 4) {
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    }

    function test (string) {
      var output = string.split(",");
      return output;
    }
  });

})();

(function () {
'use strict';

  var app = angular.module('LunchCheck', []);

  app.controller('LunchCheckController', function ($scope) {
    $scope.dishes = "";

    $scope.message = "";

    $scope.color = "";

    // $scope.displayMessage = function () {
    //   $scope.message = checkNumber($scope.dishes);
    //   $scope.output = test($scope.dishes);
    //
    // };

    $scope.displayMessage = function (string) {

      var arrayOfStrings = string.split(",").filter(el => el.trim());

      var length = arrayOfStrings.length;

      if (length == 0) {
        $scope.message = "Please Enter Data First!";
        $scope.color = "red";
      } else if (length < 4) {
        $scope.message = "Enjoy!";
        $scope.color = "green";
      } else {
        $scope.message = "Too much!";
        $scope.color = "green";
      }
      // $scope.message = string;
    }

    // function test (string) {
    //   var output = string.split(",").filter(el => el.trim()).length;
    //   return output;
    // }
  });

})();

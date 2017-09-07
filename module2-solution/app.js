(function(){
  'use strict';

  var app = angular.module('ShoppingListCheckOff', [])

  app.controller('ToBuyController', function($scope, ShoppingListCheckOffService){
    var service = ShoppingListCheckOffService;
    $scope.shoppingList = service.getToBuyList();
    $scope.checkoff = function (index){
      service.checkoff(index);
    };
  });
  
  app.controller('AlreadyBoughtController', function($scope, ShoppingListCheckOffService){
    var service = ShoppingListCheckOffService;
    $scope.boughtList = service.getBoughtList();
  });

  app.service('ShoppingListCheckOffService', function() {
  
    var service = this;

    service.shoppingList = [
      {
        name : "Cookies",
        quantity : "10 bags"
      },

      {
        name : "Apples",
        quantity : "5 lbs"
      },

      {
        name : "Cherries",
        quantity : "3 lbs"
      },

      {
        name : "Ice Cream",
        quantity : "1 box"
      },

      {
        name : "Notebook",
        quantity : "5"
      }

    ];

    service.boughtList = [];

    service.checkoff = function (index) {
      var boughtItem = service.shoppingList.splice(index, 1)[0];
      service.boughtList.push(boughtItem);
    };
  
    service.getToBuyList = function() {
      return service.shoppingList;
    };

    service.getBoughtList = function() {
      return service.boughtList;
    };
      
  
  });

  

})();

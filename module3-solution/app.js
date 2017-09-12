(function(){
    'use strict';
  
    var app = angular.module('NarrowItDownApp', [])
  
    app.controller('NarrowItDownController', function ($scope, MenuSearchService ) {
      var service = MenuSearchService;
      $scope.output = function() {
        return service.getMatchedMenuItems();
      }; 
      
    });

    app.service('MenuSearchService', function ($http) {
        var service = this;

        service.getMatchedMenuItems = function () {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data;
            
                // return processed items
                return foundItems;
            });
        };
    });
    
   
  
  })();
  
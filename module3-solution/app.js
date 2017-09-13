(function(){
    'use strict';
  
    var app = angular.module('NarrowItDownApp', [])
    
    app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
  
    app.controller('NarrowItDownController', function ($scope, MenuSearchService ) {
        var ctrl = this;
        var service = MenuSearchService;
        // console.log(this, $scope);
        ctrl.getItems = function() {
            service.getMatchedMenuItems()
            .then(function(result){
                ctrl.found = result;
                console.log("after filter");
            }); 
        }; 
    });

    app.service('MenuSearchService', function ($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http.get(ApiBasePath + '/menu_items.json')
            .then(function (result) {
                // process result and only keep items that match
                var menuList = result.data.menu_items;
                var foundItems = [];

                if (!searchTerm) {
                    console.log("input is empty");
                //     return foundItems;
                }

                angular.forEach(menuList, function(value, key) {
                //     if (value.description.toLowerCase().indexOf(searchTerm) !== -1)
                //         {
                            foundItems.push(value);
                //         }
                });
                
                // return processed items
                return foundItems;
            })
            .catch(function(error){
                return error.data;
            });
        };
    });
    
   
  
  })();
  
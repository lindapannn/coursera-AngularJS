(function(){
    'use strict';
  
    var app = angular.module('NarrowItDownApp', [])
    
    app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    app.directive('foundItems', function () {
        var ddo = {
            templateUrl: 'foundItemsTemplate.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: function () {},
            controllerAs: 'found',
            bindToController: true
        }
   
        return ddo;
    });

    app.directive('itemsLoaderIndicator', function () {
        var ddo = {
            templateUrl: 'loader/itemsloaderindicator.template.html',
            scope: {
                itemsLoaderIndicator: '<'
                // pendingTimeout: '<'
            }
            
        }
        return ddo;
    });
  
    app.controller('NarrowItDownController', function ($scope, MenuSearchService ) {
        var ctrl = this;
        var service = MenuSearchService;
        ctrl.isPending = false;
        // console.log(this, $scope);
        ctrl.getItems = function (searchTerm) {
            ctrl.isPending = true;
            service.getMatchedMenuItems(searchTerm)
            .then(function(result){
                ctrl.found = result;
                console.log("after filter");
                ctrl.isPending = false;
            }); 
        }; 

        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
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
                    if (value.description.toLowerCase().indexOf(searchTerm) !== -1)
                        {
                            foundItems.push(value);
                        }
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
  
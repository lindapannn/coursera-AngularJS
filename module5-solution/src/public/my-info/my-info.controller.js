(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
      var $ctrl = this;
      $ctrl.signedUp = UserService.signedUp; 
      $ctrl.regUser = UserService.registeredUser;
      $ctrl.userFavDish = UserService.registeredUserFavDish;
    }
    
    
    })();
(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['MenuService', 'UserService'];
    function SignUpController(MenuService, UserService) {
    
      var $ctrl = this;
      $ctrl.signedUp = UserService.signedUp;
      $ctrl.favDishInvalid = false;
      $ctrl.reg = {};
    
      $ctrl.submit = function() {
    
        MenuService.getMenuItem($ctrl.reg.favDish)
          .then(
            function(data) {
              $ctrl.favDishInvalid = false;
              UserService.signedUp = true;
              $ctrl.signedUp = UserService.signedUp;
              UserService.registeredUser = $ctrl.reg;
              UserService.registeredUserFavDish = data;
              $ctrl.tmpuser = UserService.registeredUser;
              $ctrl.tmpdishes = UserService.registeredUserFavDish;
              console.log("user info: " + $ctrl.tmpuser);
              console.log("dishes info: " + $ctrl.tmpdishes);
            }, 
            function (data) {
              $ctrl.favDishInvalid = true;
            } 
          );
      }
    
    }
    
    })();
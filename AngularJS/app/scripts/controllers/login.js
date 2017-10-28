'use strict';

/**
 * @ngdoc function
 * @name canchasApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the canchasApp
 */
angular.module('canchasApp')
  .controller('LoginCtrl', function ($scope, $rootScope, login, constantes) {

    $scope.ingresar = function(){
      login.Login($scope.usuario.username, $scope.usuario.password, function (response) {
        if (response.success) {
          console.log("OK")
          
        } else {
          console.log("ERROR")
        }
      });
    };

        
  });
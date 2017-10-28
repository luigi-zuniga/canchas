'use strict';

/**
 * @ngdoc service
 * @name canchasApp.login
 * @description
 * # login
 * Factory in the canchasApp.
 */
angular.module('canchasApp')
  .factory('login', function ($http, $rootScope, $timeout, constantes) {
    return{
      Login : function(username, password, callback){
        $http.post(constantes.URL + 'login',{
            username: username, 
            password: password
          })
        }
      }
  });

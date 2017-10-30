'use strict';

/**
 * @ngdoc service
 * @name canchasApp.cancha
 * @description
 * # cancha
 * Factory in the canchasApp.
 */
angular.module('canchasApp')
  .factory('cancha', function (constantes, $resource) {
    return {
      datos: function () {
        return $resource(constantes.URL + 'canchas/:id',
          { id : '@id' },
          {   
            update : { 'method': 'PUT' },
            delete : { 'method': 'DELETE' },
            create : { 'method': 'POST' }
          }
        );
      }
    };
  });

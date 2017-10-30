'use strict';

/**
 * @ngdoc function
 * @name canchasApp.controller:CanchasCtrl
 * @description
 * # CanchasCtrl
 * Controller of the canchasApp
 */
angular.module('canchasApp')
  .controller('CanchasCtrl', function ($scope, $filter, constantes, cancha, $uibModal) {

    function cargarDatos(){
      var datos = cancha.datos().get();
      datos.$promise.then(function(response){
        $scope.datos = response.datos;
      });
    }

    cargarDatos();

    $scope.open = function(obj){
      var miModal = $uibModal.open({
        animation: true,
        templateUrl: 'views/forms/form-canchas.html?v=' + $filter('date')(new Date(), 'ddMMyyyyHHmmss'),
        controller: 'FormCanchasCtrl',
        resolve: {
          objeto: function () {
            return obj;          
          }
        }
      });
      miModal.result.then(function () {
        cargarDatos();
      }, function () {
        cargarDatos();
      });
    };

    $scope.eliminar = function(objeto){
      var datos = cancha.datos().delete({ id: objeto.id });
      datos.$promise.then( function(response){
          console.log(response)
          if(response.success){
            cargarDatos();
          }
      });
    };

  })
  .controller('FormCanchasCtrl', function ($scope, $filter, $uibModalInstance, constantes, objeto, cancha) {

    $scope.tipos = [
      { id : 1, nombre : "Pasto" },
      { id : 2, nombre : "Arcilla" }
    ];

    if(objeto){
      $scope.cancha = angular.copy(objeto);
      $scope.tituloFormulario = 'Modificación Canchas';
      $scope.encabezado = $scope.cancha.nombre;
      $scope.cancha.tipo = $filter('filter')( $scope.tipos, {id :  $scope.cancha.tipo.id }, true )[0];
    }else{
      $scope.cancha = {};
      $scope.tituloFormulario = 'Ingreso Canchas';
      $scope.encabezado = 'Nueva Cancha';
    }

    $scope.guardar = function () {
      var datos;
      if( $scope.cancha.id ){
          datos = cancha.datos().update({id:$scope.cancha.id}, $scope.cancha);
      }else{
          datos = cancha.datos().create({}, $scope.cancha);
      }
      datos.$promise.then(
        function(response){
          if(response.success){
            $uibModalInstance.close(response.mensaje);
          }else{
            // error
            $scope.erroresDatos = response.errores;
            console.log(response.mensaje);
          }
        }
      );
    };

  });

/*
 * Metodo module funciona para crear un modulo, se debe referenciar el nombre del modulo
 * el segundo parametro son los modulos de angular que uno quiere importar
 * El objeto scope enlaza el controlador con la vista.
 */

var app = angular.module('MyFirstApp',[]);
app.controller("FirstController",function($scope){
	$scope.nombre = "Dawin";
})

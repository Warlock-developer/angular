angular.module("miFirstApp", [])
        //no se necesita declarar en el scope del controlador la variable
        //nombre ya que lo hereda del rootscoope.
        .run(function ($rootScope) {
            $rootScope.nombre = "Codigo facilito";
            //variable para compartir en otros controladores
        })
        .controller("FirstController", function ($scope) {
            $scope.nombre = "dawin";//sobreescribo la variable del padre rootscope
        })
        .controller("ChildController", function ($scope) {

        });
<!DOCTYPE html>
<html ng-app="mainModule">
    <head>
        <meta charset="utf-8">
        <title>Ejemplo de Apply</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js" ></script>
        <script>
            angular.module("mainModule", [])
                    .controller("FirstController", function ($scope) {
                        $scope.nombre = "Dawin";
                        setTimeout(function () {
//                            $scope.nombre = "Codigo Facilito";
//                            console.log($scope.nombre);
                            /*
                             * La variable no se actualiza porque se esta realizando el cambio en un lugar donde el
                             * angular context no esta esperando que se modifique y por eso no manda allamar a $digest
                             * automaticamente, no existe sincronización.
                             * para ello llamamos a $digest.
                             * $digest va por todos los watchers preguntando cambios y actualiza la vista.
                             */
//                            $scope.$digest(); //esta no es la mejor manera de hacerlo, es mejor usar apply
                            //este codigo se encuentra dentro del contexto de angular
                            $scope.$apply(function () {
                                $scope.nombre = "Codigo Facilito";
                            });
                        }, 2000);
                    });
        </script>
    </head>
    <body ng-controller="FirstController">
        <h1>{{nombre}}</h1>
    </body>
</html>
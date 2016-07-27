angular.module("miFirstApp", [])
        .run(function ($rootScope) {
            $rootScope.nombre = "Codigo facilito";
        })
        .controller("FirstController", function ($scope) {
            $scope.nombre = "dawin";
        })
        .controller("ChildController", function ($scope) {

        });
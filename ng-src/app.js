angular.module("CustomDirective", [])
        //directiva personalizada
        .directive('backImg', function () {
            //scope: el mismo del controlador donde se va a poner la directiva
            //element: elemento de la directiva
            //attrs: atributos del elemento
            //$observe
            return function (scope, element, attrs) {
                attrs.$observe('backImg',function(value){
                    element.css({
                        "background":"url("+value+")",
                        "background-size": "cover",
                        "background-position":"center"
                    });
                });
            }
        })
        .controller("AppCtrl", function ($scope, $http) {
            $http.get("https://api.github.com/users/Warlock-developer/repos")//requerimos el servicio
                    .success(function (data) {
                        $scope.repos = data;
                    })
                    .error(function (err) {
                        console.log(err);
                    });
        });



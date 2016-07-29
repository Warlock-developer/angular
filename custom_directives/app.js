angular.module("CustomDirective", [])
        .directive('myAutocomplete', function () {
            function link(scope, element, attrs) {
                //autocomplete es de jquery ui
                $(element).autocomplete({
                    source: scope.$eval(attrs.myAutocomplete),
                    select: function(ev,ui){
                        ev.preventDefault();
                        if(ui.item){
                            scope.optionSelected(ui.item.value);
                        }
                    },
                    focus: function(ev,ui){
                        ev.preventDefault();
                        $(this).val(ui.item.label);
                    }
                });
            };
            return {
                link: link
            }
        })
        //directiva personalizada
        .directive('backImg', function () {
            //scope: el mismo del controlador donde se va a poner la directiva
            //element: elemento de la directiva
            //attrs: atributos del elemento
            //$observe
            return function (scope, element, attrs) {
                attrs.$observe('backImg', function (value) {
                    element.css({
                        "background": "url(" + value + ")",
                        "background-size": "cover",
                        "background-position": "center"
                    });
                });
            }
        })
        .controller("AppCtrl", function ($scope, $http) {
            $scope.repos = [];

//            $http.get("https://api.github.com/users/Warlock-developer/repos")//requerimos el servicio
            $http.get("https://api.github.com/users/twitter/repos")//requerimos el servicio
                    .success(function (data) {
                        $scope.posts = data;
                        for (var i = data.length - 1; i >= 0; i -- ) {
                            var repo = data[i];
                            $scope.repos.push(repo.name);
                        }

                    })
                    .error(function (err) {
                        console.log(err);
                    });
                    
                    $scope.optionSelected = function(data){
                        $scope.$apply(function(){
                            $scope.main_repo = data;
                        });
                    }
        });



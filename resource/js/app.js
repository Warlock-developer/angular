/**
 * Muchos de los usus de angular es consumiendo apiResfull
 * @param {type} param
 */
angular.module("FinalApp", ["lumx", "ngRoute","ngResource"])
        .config(function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        controller: "MainController",
                        templateUrl: "templates/home.html"
                    })
        });
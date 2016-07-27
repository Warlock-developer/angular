/*
 * servicio a traves de factory
 * los factoris retornan un objeto.
 */
angular.module("ToDoList", ["LocalStorageModule"])
        .factory("ToDoService", function (localStorageService) {
            var toDoService = {};

            toDoService.key = "angular-todolist";
            if (localStorageService.get(toDoService.key)) {
                toDoService.activities = localStorageService.get(toDoService.key);
            } else {
                toDoService.activities = [];
            }

            return toDoService();
        })
        .controller("ToDoController", function ($scope) {
            $scope.$watchCollection('todo', function (newValue, oldValue) {
                localStorageService.set("angular-todolist", $scope.todo);
            });

            $scope.addActv = function () {
                $scope.todo.push($scope.newActv);
                $scope.newActv = {};
            }
        });
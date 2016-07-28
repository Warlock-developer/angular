/*Servicio para administrar un todo list, esto la hace mas modular y se pueden
 * mover servicios, reciclarlos entre aplicaciones.
 * servicio a traves de factory
 * los factoris retornan un objeto, se estructura el objeto y se retorna.
 * Los servicios pueden inyectar otros servicios, como en el ejemplo el
 * servicio de localstorageservice o rootscope o http
 * a los factories se les puede definir un constructor
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

            toDoService.add = function (newActv) {
                toDoService.activities.push(newActv);
                toDoService.updaLocalStorage();
            };

            toDoService.updaLocalStorage = function () {
                localStorageService.set(toDoService.key, toDoService.activities);
            };

            toDoService.clean = function () {
                toDoService.activities = [];
                toDoService.updaLocalStorage();
                return toDoService.getAll();
            };

            toDoService.getAll = function () {
                return toDoService.activities;
            };

            toDoService.removeItem = function (item) {
                toDoService.activities = toDoService.activities.filter(function (activity) {
                    return activity !== item;
                });
                toDoService.updaLocalStorage();
                return toDoService.getAll();
            };

            return toDoService;
        })
        .controller("ToDoController", function ($scope,ToDoService) {
            $scope.todo = ToDoService.getAll();
            
            $scope.addActv = function () {
                ToDoService.add($scope.newActv);
                $scope.newActv = {};
            };
            
            $scope.removeActv = function (item) {
                $scope.todo = ToDoService.removeItem(item);
            };
            
            $scope.clean = function (item) {
                $scope.todo = ToDoService.clean();
            };
        });
angular.module("FinalApp")
        .controller("MainController", function ($scope, $resource) {
            //configuramos el resource, url del api
            Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
            User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
            //query() -> GET /posts -> devuelve arreglo de posts
            $scope.posts = Post.query();
            $scope.users = User.query();
            
        })
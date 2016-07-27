/*
 * databining es la sincronización que se da entre el modelo y la vista
 */
angular.module('myFirstApp', [])
        .controller("FirstController", ["$scope", function (m) {
                m.nombre = "dawin";
                m.nuevoComentario = {};
                m.comentarios = [
                    {
                        comentario: "Buen tutorial",
                        username: "Codigofacilito"
                    },
                    {
                        comentario: "Muy Malo",
                        username: "otro_usuario"
                    }
                ];
                m.agregarComentario = function () {
                    m.comentarios.push(m.nuevoComentario);
                    m.nuevoComentario = {};
                }
            }]);

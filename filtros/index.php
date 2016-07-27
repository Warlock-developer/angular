<!DOCTYPE html>
<html ng-app="mainModule">
<head>
	<meta charset="utf-8">
	<title>Filtros Angular</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js" ></script>
	<script src="controller.js"></script>
</head>
<body ng-controller="FiltersController">
	{{mi_html | json}}
	<p>
		{{costo | currency:'$'}}
	</p>
</body>
</html>
var app = angular.module('gifChat');

app.controller('mainController', function($scope, mainService) {

	$scope.gifs = [];

	$scope.findGif = function() {
		mainService.searchGif($scope.message)
		.success(function(response) {
			var randNum = Math.floor(Math.random() * response.data.length);
			console.log(response);
			$scope.gifs.unshift(response.data[randNum].images.fixed_width.url);
			$scope.message = "";
		})
		.error(function(err) {
			console.error(err);
		});
	}

});
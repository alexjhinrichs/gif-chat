var app = angular.module('gifChat');

app.service('mainService', function($http) {
	
	this.searchGif = function(query) {
		return $http({
			method: 'GET',
			url: 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC'
		})
	}
	});


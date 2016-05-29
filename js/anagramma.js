var app = angular.module('myApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

});

app.config(['$httpProvider', function($httpProvider) {
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller('planetController', function($scope, $http, $location) {
    $scope.searchV = function(query) {
      var url = "http://paroleonline.it/ws/anagramma?parola=" + query;
      $http.get(url)
      	.then(function(response) {
            $scope.result = response.data.anagrammi;
            ga('send', 'event', 'GrammaticaItaliana', 'anagramma', query);
         });
    };
    
    $scope.query = $location.search().q;
    searchV($scope.query);
			 
});

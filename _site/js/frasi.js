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
      var url = "http://paroleonline.it/ws/frasi/_search?size=100&q=text:" + query;
      $http.get(url)
      	.then(function(response) {
            $scope.frasi = response.data.hits.hits;
            ga('send', 'event', 'GrammaticaItaliana', 'frasi', query);
         });
     };
});

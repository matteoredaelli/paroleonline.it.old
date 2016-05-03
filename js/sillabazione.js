//var app = angular.module('myApp', []);
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
      var url = "http://paroleonline.it/ws/sillabazione?parola=" + query;
      $http.get(url)
      	.then(function(response) {
            $scope.query = response.data.word;
            ga('send', 'event', 'GrammaticaItaliana', 'sillabazione', query);
            $scope.sillabe = response.data;
         });
     };
});

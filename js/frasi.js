var app = angular.module('myApp', [], function($interpolateProvider) {
});

app.controller('planetController', function($scope, $http, $location, $window) {
    $scope.redirect = function(query){
        var url = "http://" + $window.location.host + "/frasi/" + query[0] + "/" + query + ".html";
        $window.location.href = url;
    };
});


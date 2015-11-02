// Create an angular application called "sortApp"
var sortApp = angular.module('sortApp',[]);

// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables

sortApp.controller('mainController',function($scope, $http){
    $http.get('data/salaries.json').then(function(response){
        $scope.data = response.data;
    });

});


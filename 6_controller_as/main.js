var app = angular.module('myApp', []);

app.controller('ParentController', function($rootScope) {
    //$scope.name = "Parent";
    //
    //$scope.reset = function () {
    //	$scope.name = "Parent";
    //};
    this.name = "Parent scope";

});

app.controller('ChildController', function($rootScope) {

    this.name = "Child scope";

});
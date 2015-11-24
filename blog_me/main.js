var app = angular.module('myApp', []);

app.filter('content', function() {
    return function(input) {
        if (input.length > 10) {
            return input.substring(0, 9) + "...";
        }
        return input;
    }
});

app.controller('BlogController', function($scope) {
    $scope.list = [];
    $scope.submitPost = function() {
        if ($scope.title !== undefined && $scope.content != undefined) {
            $scope.list.push({
                title: $scope.title,
                content: $scope.content,
                createdate: new Date()
            });
            cleardata();
        }
    }

    function cleardata() {
        delete $scope.title;
        delete $scope.content;
    }
});
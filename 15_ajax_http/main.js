angular.module('myApp', [])
    .service('blogService', function($http) {
        this.getAllPosts = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:4000/blogs'
            });
        }
    })

    .service('blogService2', function($http, $q) {
        this.getAllPosts = function() {
            var deferred = $q.defer();
            $http.get('http://localhost:4000/blogs')
                .then(function(resp) {
                    deferred.resolve(resp.data);
                }, function() {
                    deferred.reject();
                });

            return deferred.promise;
        }
    })

    .service('blogService3', function($http) {
        this.getAllPosts = function() {
            return $http.get('http://localhost:4000/blogs')
                .then(function(resp) {
                    return resp.data;
                }); //.then(function(data) { // data is resp.data

            //});
        }
    })

angular.module('myApp').controller('TestController',
    function($scope, blogService, blogService2, blogService3) {
        $scope.getData = function() {
            blogService.getAllPosts().success(function(data, status, config, headers) {
                $scope.data = data;
            }).error(function(data, status, config, headers) {
                console.log('Some error occurred!');
            });
        }

        $scope.getData2 = function() {
            blogService2.getAllPosts()
                .then(function(data) {
                    $scope.data = data;
                })
                .catch(function() {
                    console.log('Some error occurred!');
                });
        }

        $scope.getData3 = function() {
            blogService3.getAllPosts()
                .then(function(data) {
                    alert(JSON.stringify(data));
                })
        }
    });

angular.module('myApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.common.Accept = "application/json";

    $httpProvider.defaults.transformRequest = function(data, getHeaders) {
        var headers = getHeaders(); //obtain the headers
        headers['Content-Type'] = 'text/plain'; // add a header dynamically
        return JSON.stringify(data); //return serialized data
    }

});
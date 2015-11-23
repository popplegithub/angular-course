angular.module('myApp', []);

angular.module('myApp').controller('FormController', function($scope) {

    $scope.formData = {
        name: 'popple',
        email: 'popple.level.up@gmail.com'
    }

    $scope.register = function() {
        alert("registered " + $scope.formData.name);
    }
})

// angular.module('myApp', []);

// angular.module('myApp').controller('FormController', FormController );

//  function FormController($scope) {

//     $scope.formData = {
//         name: 'popple',
//         email: 'popple.level.up@gmail.com'
//     }

//     $scope.register = function() {
//         alert("registered " + $scope.formData.name);
//     }
// })
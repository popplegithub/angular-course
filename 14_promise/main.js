var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('PromiseController', function($timeout, $scope, $q) {
    $scope.value = "Hello world"

    var kfcOfficer = $q.defer();

    console.log("preparing.....");

    var order = setTimeout(function() {
        console.log("Officer: chicken cooked");
        kfcOfficer.resolve("lots of chicken!")
    }, 5000);

    var chickenLover = kfcOfficer.promise;

    chickenLover.then(function(data) {
        console.log("User: eat them all : " + data);
    }, function(data) {
        console.error(data);
        console.error("User: I'll go buy McDonald")
    });

    $scope.stop = function() {
        clearTimeout(order);
        kfcOfficer.reject("order canceled");
    }
    // $timeout(function() {
    // 	$scope.value = "Hello AngularJS!";
    // 	$timeout(function() {
    // 		$scope.value = "Hello EmberJS!";
    // 		$timeout(function() {
    // 			$scope.value = "Hello KnockoutJS!";
    // 		}, 3000);
    // 	}, 3000);
    // }, 3000);
});

angular.module('myApp').controller('ModalController', function($scope, $uibModal) {
    $scope.open = function() {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 500,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });
    }
});

angular.module('myApp').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items) {

    $scope.ok = function() {
        $uibModalInstance.close('ok');
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});
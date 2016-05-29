var myApp = angular.module("myApp");
myApp.controller("phoneController", function($scope) {
    $scope.phones = [{
            name: 'Nokia',
            models: [
                {
                name: 'xxx',
                price: 100
                },
                {
                name: 'yyy',
                price: 200
                }            
            ]
        },
        {
            name: 'Samsung',
            models: [
                {
                name: 'zzz',
                price: 150
                },
                {
                name: 'ttt',
                price: 250
                }                
            ]
        }
    ]
});



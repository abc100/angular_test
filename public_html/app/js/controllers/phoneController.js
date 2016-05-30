var myApp = angular.module("myApp");
myApp.controller("phoneController", function($scope) {
//    $scope.phones = [{
//            name: 'Nokia',
//            models: [
//                {
//                name: 'xxx',
//                price: 100
//                },
//                {
//                name: 'yyy',
//                price: 200
//                }            
//            ]
//        },
//        {
//            name: 'Samsung',
//            models: [
//                {
//                name: 'zzz',
//                price: 150
//                },
//                {
//                name: 'ttt',
//                price: 250
//                }                
//            ]
//        }
//    ]
    $scope.phones = [
        {
           name: 'Nokia xxx',
           year: 2014,
           price: 100,
           company: 'Nokia'
        },
        {
            name: 'Nokia yyy',
            year: 2013,
            price: 150,
            company: 'Samsung'
        },
        {
            name: 'Samsung yyy',
            year: 2015,
            price: 80,
            company: 'Samsung'
        }
    ];
    
    $scope.tablets = [
        {
           name: 'Nokia tablet1',
           year: 2014,
           price: 100,
           company: 'Nokia'
        },
        {
            name: 'Nokia tablet2',
            year: 2013,
            price: 150,
            company: 'Samsung'
        },
        {
            name: 'Samsung tablet1',
            year: 2015,
            price: 80,
            company: 'Samsung'
        }
    ];
    
    $scope.data = {};
    
    $scope.setFile = function() {
        if ($scope.data.mode == 'Tablets') {
            return 'tabletList.html';
        }
        else if ($scope.data.mode == 'Phones') {
            return 'phoneList.html';
        }
    }
    
    $scope.modes = [
        {
            value: 'Tablets',
            label: 'Tablets'
        },
        {
            value: 'Phones',
            label: 'Phones'
        }
    ];
    
    $scope.data2 = {visible: false};
    
    $scope.mystyle = {background: '#eee', color: '#333'};
    $scope.myclass = "myclass";
});



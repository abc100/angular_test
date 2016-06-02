var questApp = angular.module("questApp", ["ngRoute"]).config(function ($routeProvider) {
    
    $routeProvider.when('/question', {
        templateUrl: 'views/question.html',
        controller: 'questionController3'
    });
    
    $routeProvider.when('/answer', {
        templateUrl: 'views/answer.html',
        controller: 'answerController'
    });
    
    $routeProvider.otherwise({redirectTo: '/question'});

});



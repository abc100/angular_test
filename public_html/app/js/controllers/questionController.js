var myApp = angular.module("myApp");
myApp.controller("questionController", function($scope) {
    
    $scope.sortparam = '-rate';
    
    $scope.question = {
        text: 'What framework is better to use?',
        author: 'Vasya',
        date: '20/10/2013',
        answers: [
            {
                text: 'AngularJS',
                author: 'Phillipp',
                date: '21/10/2013',
                rate: 2
            },
            {
                text: 'backbone',
                author: 'Ivan',
                date: '22/10/2013',
                rate: 1
            },
            {
                text: 'none',
                author: 'Pafnutij',
                date: '21/10/2013',
                rate: 3
            },
        ]
    };
    
    $scope.voteUp = function(answer) {
        answer.rate++;
    }
    
    $scope.voteDown = function(answer) {
        answer.rate--;
    }
    
    $scope.questColorClass = 'questcolor';
    
    $scope.changeClass = function(e) {
        $scope.questColorClass = e.type == "mouseover" ? "questselectedclass" : "questcolor";
    }
});



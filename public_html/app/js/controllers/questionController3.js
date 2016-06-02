questApp.controller("questionController3", function($scope, $http) {
//    console.log('question');
    $scope.loaded = false;
    
    $scope.load = function() {
        $http.get('question.json').success(function(data, status, headers, config){
            $scope.question = data.question;
            $scope.loaded = true;
//            console.log(status);
//            console.log(headers("content-length"));
//            console.log(config);
        }).error(function(data, status, headers, config) {
//            console.log(status);
        });
    }
    
    $scope.voteUp = function(answer) {
        answer.rate++;
    }
    
    $scope.voteDown = function(answer) {
        answer.rate--;
    }
    
});



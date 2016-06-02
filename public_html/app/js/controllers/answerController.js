questApp.controller('answerController', function answerController ($scope, $http) {
    console.log('answer');
    
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
    
    $scope.save = function (answer, answerForm) {
        if (answerForm.$valid) {
            
            $http.post("answer.php", answer).success(function(data) {
                $scope.resp = data;
            }).error(function(data, status) {
                console.log(status);
            });
            
//            $scope.question.answers.push({text: answer.text, author: answer.author, date: answer.date, rate: 0});
//            alert(answer.author + ', your answer has been saved');
        }
    }
});



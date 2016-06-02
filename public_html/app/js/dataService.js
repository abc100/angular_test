questApp.factory('dataService', function() {
    return {
        question: {
            text: 'What framework is better to use?',
            author: 'Ivan',
            date: '30/05/2016',
            answers: [
                {
                    text: 'angular',
                    author: 'Peter',
                    date: '30/05/2016',
                    rate: 2
                },
                {
                    text: 'knockout',
                    author: 'Fedor',
                    date: '31/05/2016',
                    rate: 1
                },
                {
                    text: 'none',
                    author: 'Boris',
                    date: '31/05/2016',
                    rate: 3
                }
            ]
        }
    }
});



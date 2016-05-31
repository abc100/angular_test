questApp.filter('formatText', function() {
    return function(text) {
        if (text.indexOf('none') !== -1) {
            return '***';
        }
        else {
            return text;
        }
    }
});

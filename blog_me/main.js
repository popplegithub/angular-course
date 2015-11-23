var app = angular.module('myApp', []);

app.filter('content', function() {
    return function(input) {
        return input.substring(0, 9) + "...";
    }
});

app.controller('BlogController', function() {

    var ctrl = this;
    ctrl.submitPost = submitPost;

    ctrl.list = [];

    function submitPost() {
        ctrl.list.push({
            title: ctrl.title,
            content: ctrl.content,
            date: new Date()
        });
        cleardata();
    }

    function cleardata() {
        delete ctrl.title;
        delete ctrl.content;
        delete ctrl.date;
    }

});
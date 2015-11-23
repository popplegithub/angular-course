var app = angular.module('myApp', []);

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
        console.log(ctrl.list);
    }
});
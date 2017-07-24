$(document).ready(function() {
    
   angular.module("patronicityTest", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
        .when("/profile", {
            templateUrl: "profile-view.html",
            controller: "profileController"
        })
       .otherwise("/");
    });
    
    
    
});
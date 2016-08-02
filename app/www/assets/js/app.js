var mainApp = angular.module('mainApp', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.

    when ('/clock', {
        templateUrl: 'clock.html',
        controller: 'clockCtrl'
    }).

    otherwise({
        redirectTo: '/clock'
    })
});

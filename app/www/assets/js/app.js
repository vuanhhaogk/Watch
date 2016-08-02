var mainApp = angular.module('mainApp', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.

    when ('/clock', {
        templateUrl: 'clock.html',
        controller: 'clockCtrl'
    }).

    when ('/calendar', {
        templateUrl: 'calendar.html',
        controller: 'calendarCtrl'
    }).

    otherwise({
        redirectTo: '/clock'
    })
});

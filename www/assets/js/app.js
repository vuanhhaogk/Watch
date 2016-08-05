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

    when ('/alarm', {
        templateUrl: 'alarm.html',
        controller: "alarmCtrl"
    }).

    when ('/stopwatch', {
        templateUrl: 'stopwatch.html',
        controller: "stopwatchCtrl"
    }).

    when ('/countdown', {
        templateUrl: 'countdown.html',
        controller: "countdownCtrl"
    }).

    when ('/setting', {
        templateUrl: 'setting.html',
        controller: "settingCtrl"
    }).

    otherwise({
        redirectTo: '/clock'
    })
});

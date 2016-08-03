mainApp.controller('alarmCtrl', function($scope, Alarm, WatchHandler){
    var alarm = Alarm.getAlarm();
    var alarm_form = document.getElementById('alarm-form');
    var hourElm = alarm_form.getElementsByClassName('hour')[0];
    var minElm = alarm_form.getElementsByClassName('min')[0];

    hourElm.onchange = function(e){
        var val = parseInt(this.value);

        if (isNaN(val) || val < 0 || val >= 24)
            val = 0;

        alarm.hour = val;

        this.value = WatchHandler.addPrefix(val);
    }

    minElm.onchange = function(e){
        var val = parseInt(this.value);

        if (isNaN(val) || val < 0 || val >= 60)
            val = 0;

        alarm.min = val;

        this.value = WatchHandler.addPrefix(val);
    }

    $scope.active = false;

    $scope.$watch(function(){
        if ($scope.active)
            alarm.turnOn();
        else
            alarm.turnOff();
    });
});

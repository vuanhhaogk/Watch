mainApp.controller('alarmCtrl', function($scope, Alarm, WatchHandler){
    var alarm = Alarm.getAlarm();
    var alarm_form = document.getElementById('alarm-form');
    var hourElm = alarm_form.getElementsByClassName('hour')[0];
    var minElm = alarm_form.getElementsByClassName('min')[0];
    var aalarm = document.getElementById('active-alarm');

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

    $scope.active = alarm.on;
    aalarm.checked = alarm.on;

    hourElm.value = WatchHandler.addPrefix(alarm.hour);
    minElm.value = WatchHandler.addPrefix(alarm.min);

    $scope.$watch(function(){
        if ($scope.active)
            alarm.turnOn();
        else
            alarm.turnOff();
    });
});

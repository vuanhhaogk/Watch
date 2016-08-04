mainApp.controller('stopwatchCtrl', function($scope, StopWatch){
    var stime = document.getElementById('stopwatch').getElementsByClassName('time')[0];
    var stopwatch = StopWatch.getStopWatch();

    stime.innerHTML = StopWatch.toShowTime(stopwatch.getTime());

    $scope.stopwatch = stopwatch;

    $scope.tick = function(time){
        stime.innerHTML = StopWatch.toShowTime(time);
    }

    $scope.startTick = function(){
        if (!stopwatch.is_start){
            stopwatch.start($scope.tick);
        } else {
            stopwatch.list.push(StopWatch.toShowTime(stopwatch.getTime()));
        }
    }

    $scope.refresh = function(){
        stopwatch.stop();
        stime.innerHTML = StopWatch.toShowTime(stopwatch.getTime());
        stopwatch.list = [];
    }

    if (stopwatch.is_start){
        stopwatch.tick = $scope.tick;
    }
});

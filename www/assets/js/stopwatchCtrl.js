mainApp.controller('stopwatchCtrl', function($scope, StopWatch){
    var stime = document.getElementById('stopwatch').getElementsByClassName('time')[0];
    var stopwatch = StopWatch.getStopWatch();

    stime.innerHTML = StopWatch.toShowTime(stopwatch.getTime());

    $scope.list = [];

    $scope.startTick = function(){
        if (!stopwatch.is_start){
            stopwatch.start(function(time){
                stime.innerHTML = StopWatch.toShowTime(time);
            });
        } else {
            $scope.list.push(StopWatch.toShowTime(stopwatch.getTime()));
        }
    }

    $scope.refresh = function(){
        stopwatch.stop();
        stime.innerHTML = StopWatch.toShowTime(stopwatch.getTime());
        $scope.list = [];
    }
});

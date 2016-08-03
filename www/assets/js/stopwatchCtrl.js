mainApp.controller('stopwatchCtrl', function($scope, WatchHandler){
    const
        DEFAULT_SHOW = "00:00:00.0";

    var stime = document.getElementById('show_time');
    stime.innerHTML = DEFAULT_SHOW;

    var toShowTime = function(t){
        t = Math.floor(t/100);
        var mic = t % 10;
        t = Math.floor(t/10);
        var sec = t % 60;
        t = Math.floor(t/60);
        var min = t % 60;
        var hour = Math.floor(t/60);

        return WatchHandler.addPrefix(hour) + ':'
            + WatchHandler.addPrefix(min) + ':'
            + WatchHandler.addPrefix(sec) + '.'
            + mic;
    }

    $scope.l_time = 0;

    $scope.startTick = function(){
        $scope.l_time = +new Date();

        $scope.loopID = setInterval(function(){
            stime.innerHTML = toShowTime(+new Date() - $scope.l_time);
        }, 100);
    }

    $scope.refresh = function(){

    }
});

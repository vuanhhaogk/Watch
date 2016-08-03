(function(){

var stopwatch = {
    l_time: 0,
    is_start: false
}

stopwatch.start = function(callback){
    this.l_time = +new Date();
    this.is_start = true;
    callback(0);

    this.loopID = setInterval(function(){
        callback(+new Date() - this.l_time);
    }.bind(this), 50);
}

stopwatch.stop = function(){
    clearInterval(this.loopID);
    this.l_time = 0;
    this.is_start = false;
}

stopwatch.getTime = function(){
    return this.l_time == 0 ? 0 : +new Date() - this.l_time;
}

mainApp.service('StopWatch', function(WatchHandler){
    this.getStopWatch = function(){
        return stopwatch;
    }

    this.toShowTime = function(t){
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
});

})();

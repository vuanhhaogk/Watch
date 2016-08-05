(function(){

var stopwatch = {
    l_time: 0,
    is_start: false,
    list: [],
    tick: function(){}
}

stopwatch.updateStopWatch = function(){
    if (Data.isLastData()){
        Data.setStopWatch({
            time: +this.l_time,
            list: this.list
        });
    }
}

stopwatch.start = function(is_update){ // default true
    this.l_time = +new Date();
    this.is_start = true;

    if (is_update === undefined || is_update === true)
        this.updateStopWatch();

    stopwatch.tick(0);

    this.loopID = setInterval(function(){
        stopwatch.tick(+new Date() - this.l_time);
    }.bind(this), 50);
}

stopwatch.stop = function(){
    clearInterval(this.loopID);
    this.l_time = 0;
    this.is_start = false;
    this.updateStopWatch();
}

stopwatch.getTime = function(){
    return this.l_time == 0 ? 0 : +new Date() - this.l_time;
}

stopwatch.pushList = function(item){
    this.list.push(item);
    this.updateStopWatch();
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

if (Data.isLastData()){
    var s = Data.getStopWatch();

    if (s.time > 0){
        stopwatch.start(false);
        stopwatch.l_time = new Date(s.time);
        stopwatch.list = s.list;
    }
}

})();

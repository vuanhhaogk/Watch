var Countdown = (function(){

var countdown = {
    l_time: 0,
    d_time: 0,
    is_start: false,
    tick: function(){},
    loop_id: null,
    sound: new Audio()
}

countdown.sound.src = 'assets/sound/alarm.wav';
countdown.sound.loop = true;

countdown.getTime = function(){
    var c = this.d_time - (+new Date() - this.l_time);
    return !this.is_start ? this.d_time : c >= 0 ? c : 0;
}

countdown.start = function(callback){
    this.l_time = +new Date();
    this.is_start = true;

    this.tick = callback;
    this.tick(this.d_time);

    this.loop_id = setInterval(function(){
        var c = this.getTime();

        if (this.is_start){
            if (c > 0){
                this.tick(this.d_time - (+new Date() - this.l_time));
            } else {
                this.sound.play();
            }
        } else {
            clearInterval(this.loop_id);
            this.sound.pause();
            this.l_time = 0;
            this.d_time = 0;
        }
    }.bind(this), 50);
}

countdown.stop = function(){
    this.is_start = false;
}

countdown.getHour = function(){
    return Math.floor(this.getTime()/(1000 * 60 * 60));
}

countdown.getMin = function(){
    return Math.floor(this.getTime()/(1000 * 60));
}

countdown.getSec = function(){
    return Math.floor(this.getTime()/1000);
}

countdown.getMic = function(){
    return Math.floor(this.getTime()/10);
}

mainApp.service('Countdown', function(){
    this.getCountdown = function(){
        return countdown;
    }
});

return countdown;

})();

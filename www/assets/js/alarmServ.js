var Alarm = (function(){

var alarm = {
    on: false,
    hour: 0,
    min: 0,
    sound: new Audio()
};

alarm.sound.src = 'assets/sound/alarm.wav';
alarm.sound.loop = true;

alarm.tick = function(){
    var d = new Date();

    if (this.hour === d.getHours() && this.min === d.getMinutes()){
        this.sound.play();
    } else {
        this.sound.pause();
    }

    setTimeout(function(){
        if (this.on)
            this.tick();
        else {
            this.sound.pause();
        }
    }.bind(this), 1000);
}

alarm.turnOn = function(){
    if (!this.on){
        this.on = true;
        this.tick();
    }
}

alarm.turnOff = function(){
    this.on = false;
}

mainApp.service('Alarm', function(){
    this.getAlarm = function(){
        return alarm;
    }
})

return alarm;

})()

var Alarm = (function(){

var alarm = {
    on: false,
    hour: 0,
    min: 0,
    sound: new Audio()
};

if (Data.isLastData()){
    var a = Data.getAlarm();

    alarm.on = a.enable;
    alarm.hour = a.time.hour;
    alarm.min = a.time.min;
}

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
        this.updateAlarm();
        this.tick();
    }
}

alarm.turnOff = function(){
    this.on = false;
    this.updateAlarm();
}

alarm.updateAlarm = function(){
    if (Data.isLastData()){
        Data.setAlarm({
            enable: this.on,
            time: {
                hour: this.hour,
                min: this.min
            }
        });
    }
}

alarm.setHour = function(val){
    this.hour = val;

    this.updateAlarm();
}

alarm.setMin = function(val){
    this.min = val;

    this.updateAlarm();
}

mainApp.service('Alarm', function(){
    this.getAlarm = function(){
        return alarm;
    }
})

return alarm;

})()

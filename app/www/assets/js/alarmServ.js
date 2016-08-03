var Alarm = (function(){

var alarm = {
    on: 'false',
    hour: 0,
    min: 0
};

alarm.tick = function(){
    var d = new Date();

    if (this.hour === d.getHours() && this.min === d.getMinutes()){
        console.log('Ring');
    }

    setTimeout(function(){
        if (this.on)
            this.tick();
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

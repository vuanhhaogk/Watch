var Data = (function(){

const
    fs = require('fs'),
    DIR = './www/data.json';

var Data = {
    _data: JSON.parse(fs.readFileSync(DIR).toString())
};

Data.save = function(){
    fs.writeFileSync(DIR, JSON.stringify(this._data, null, 2));
}

Data.isLastData = function(){
    return this._data.setting.lastdata;
}

Data.getAlarm = function(){
    return this._data.alarm;
}

Data.setAlarm = function(a){
    this._data.alarm = a;
    this.save();
}

Data.getStopWatch = function(){
    return this._data.stopwatch;
}

Data.setStopWatch = function(s){
    this._data.stopwatch = s;
    this.save();
}

mainApp.service('Data', function(){
    getData = function(){
        return Data;
    }
});

return Data;

})();

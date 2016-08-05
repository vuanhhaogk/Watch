var Data = (function(){

const
    fs = require('fs'),
    DIR = './assets/data.json';

var Data = {
    _data: JSON.parse(fs.readFileSync(DIR).toString())
};

Data.isLastData = function(){
    return this._data.setting.lastdata;
}

mainApp.service('Data', function(){
    getData = function(){
        return Data;
    }
});

return Data;

})();

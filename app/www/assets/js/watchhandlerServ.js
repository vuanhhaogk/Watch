(function(){

mainApp.service('WatchHandler', function(){
    this.addPrefix = function(num){
        return (num/10 > 1 ? num : '0' + num).toString();
    }
});

})();

mainApp.controller('clockCtrl', function($scope, CanvasClock, WatchHandler){
    var clock = CanvasClock.init();
    var wrap = document.getElementById('clock-canvas');
    var ctext = document.getElementById('clock-text');
    var render = function () {
        var wrap = document.getElementById('clock-canvas');

        if (wrap){
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();

            clock.update(h, m, s);
            ctext.innerHTML = WatchHandler.addPrefix(h) + ':' + WatchHandler.addPrefix(m) + ':' + WatchHandler.addPrefix(s);
        } else {
            clearInterval(intervalID);
        }
    };

    wrap.appendChild(clock.view);
    render();

    var intervalID = setInterval(render, 1000);
});

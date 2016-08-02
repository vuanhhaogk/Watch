mainApp.controller('clockCtrl', function($scope, CanvasClock){
    var clock = CanvasClock.init();
    var wrap = document.getElementById('clock-canvas');

    wrap.appendChild(clock.view);

    var intervalID = setInterval(function () {
        var wrap = document.getElementById('clock-canvas');

        if (wrap){
            var now = new Date();
            clock.update(now.getHours(), now.getMinutes(), now.getSeconds());
        } else {
            clearInterval(intervalID);
        }
    }, 1000);
});

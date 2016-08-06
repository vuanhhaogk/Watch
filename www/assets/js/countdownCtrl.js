mainApp.controller('countdownCtrl', function($scope, Countdown, WatchHandler){
    var countdown = Countdown.getCountdown();

    var cElm = document.getElementById('countdown');
    var hour = cElm.getElementsByClassName('hour')[0];
    var min = cElm.getElementsByClassName('min')[0];
    var sec = cElm.getElementsByClassName('sec')[0];
    var mic = cElm.getElementsByClassName('mic')[0];

    var changeEvent = function(max, is_prefix, elm){
        var val = parseInt(elm.value);

        if (isNaN(val)){
            val = 0;
        } else {
            if (val < 0)
                val = 0;
            if (val >= max)
                val = max - 1;
        }

        elm.value = is_prefix ? WatchHandler.addPrefix(val) : val;
    }

    var tick = function(t){
        t = Math.floor(t/100);
        var i = t % 10;
        t = Math.floor(t/10);
        var s = t % 60;
        t = Math.floor(t/60);
        var m = t % 60;
        var h = Math.floor(t/60);
        setForm(h, m, s, i);
    };

    hour.onchange = function(){
        changeEvent(100, true, this);
    };

    min.onchange = function(){
        changeEvent(60, true, this);
    };

    sec.onchange = function(){
        changeEvent(60, true, this);
    };

    mic.onchange = function(){
        changeEvent(10, false, this);
    };


    var setForm = function(h, m, s, i){
        hour.value = WatchHandler.addPrefix(h);
        min.value = WatchHandler.addPrefix(m);
        sec.value = WatchHandler.addPrefix(s);
        mic.value = i;
    }

    var getForm = function(){
        return {
            hour: parseInt(hour.value),
            min: parseInt(min.value),
            sec: parseInt(sec.value),
            mic: parseInt(mic.value)
        }
    }


    setForm(
        countdown.getHour(),
        countdown.getMin(),
        countdown.getSec(),
        countdown.getMic()
    );

    $scope.toggleStart = function(){
        if (!countdown.is_start){
            var d = getForm();
            countdown.d_time = ((d.hour * 60 + d.min) * 60 + d.sec) * 1000 + d.mic * 100;
            $scope.disabled = true;

            countdown.start();
        } else {
            countdown.stop();
            $scope.disabled = false;
        }

        $scope.is_start = countdown.is_start;
    }

    $scope.disabled = false;

    countdown.tick = tick;

    $scope.is_start = countdown.is_start;
});

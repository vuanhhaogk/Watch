mainApp.controller('calendarCtrl', function($scope){
    var current = new Date();

    $scope.getMonthName = function(){
        return current.toDateString().split(' ')[1] + ' ' + current.getFullYear();
    }

    $scope.updateMonthTable = function(){
        var table = '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Web</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';
        var day_pointer = new Date(current);

        day_pointer.setDate(1);

        for (var i = 0; i < day_pointer.getDay(); i++)
            table += '<td></td>';

        table += '<td' + (day_pointer.toDateString() == (new Date()).toDateString() ? ' class="now"' : "") + '>1</td>';
        day_pointer.setDate(2);

        while (day_pointer.getDate() !== 1){
            if (day_pointer.getDay() === 0){
                table += '</tr><tr>';
            }

            table += '<td' + (day_pointer.toDateString() == (new Date()).toDateString() ? ' class="now"' : "") + '>' + day_pointer.getDate() + '</td>';
            day_pointer.setDate(day_pointer.getDate() + 1);
        }

        table += '</tr>';

        document.getElementById('month-view').innerHTML = table;
    }

    $scope.updateMonth = function(){
        $scope.month_name = $scope.getMonthName();

        $scope.updateMonthTable();
    }

    $scope.gotoPrevMonth = function(){
        current.setMonth(current.getMonth() - 1);
        $scope.updateMonth();
    }

    $scope.gotoNextMonth = function(){
        current.setMonth(current.getMonth() + 1);
        $scope.updateMonth();
    }

    $scope.updateMonth();
});

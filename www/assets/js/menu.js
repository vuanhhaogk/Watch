(function(){
    var menu = document.getElementById('menu');
    var opmn = document.getElementById('openmenu');
    var item = menu.getElementsByTagName('a');
    var clos = document.getElementById('titlebar').getElementsByClassName('close')[0];
    var bmenu = document.getElementById('menu_bg');

    for (var i = 0; i < item.length; i++){
        item[i].onclick = function(){
            opmn.checked = false;
        }
    }

    clos.onclick = function(){
        require('electron').remote.getCurrentWindow().close();
    }

    bmenu.onclick = function(){
        opmn.checked = false;
    }

})();

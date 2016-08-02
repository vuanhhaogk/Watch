(function(){
    var menu = document.getElementById('menu');
    var opmn = document.getElementById('openmenu');
    var item = menu.getElementsByTagName('a');

    for (var i = 0; i < item.length; i++){
        item[i].onclick = function(){
            opmn.checked = false;
        }
    }

})();

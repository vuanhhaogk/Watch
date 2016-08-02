(function(){

var renderer;

function updateFrame(h, m, s){
    this._text.text = h + ':' + m + ':' + s;

    this.render(this._stage);
}

function initRenderer(){
    if (!renderer){
        renderer = new PIXI.autoDetectRenderer(240, 240, {transparent: true});

        renderer._stage = new PIXI.Container();
        renderer._text = new PIXI.Text('', {font : '24px Arial', fill : 0xff1010, align : 'center'});

        renderer._stage.addChild(renderer._text);

        renderer.update = updateFrame;
    }

    return renderer;
}

mainApp.service('CanvasClock', function(){
    return {
        init: function(){
            return initRenderer();
        }
    }
})

})();

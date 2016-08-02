(function(){

const
    WIDTH = 240,
    HEIGHT = 240,
    CENTER_X = WIDTH/2,
    CENTER_Y = HEIGHT/2,
    RADIUS = WIDTH / 2 * 5 / 6,
    MAX_AXE_LEN = 10,
    MIN_AXE_LEN = 5;

var renderer;

function updateFrame(h, m, s){
    this._hourhand.rotation = (h + m/60 + s/3600) * (2 * Math.PI/12);
    this._minhand.rotation = (m + s/60) * (2 * Math.PI/60);
    this._sechand.rotation = s * (2 * Math.PI/60);

    this.render(this._stage);
}

function drawAxe(obj, step, len){
    for (var i = 0; i < 2 * Math.PI; i += step){
        obj.moveTo(RADIUS * Math.cos(i), RADIUS * Math.sin(i));
        obj.lineTo((RADIUS - len) * Math.cos(i), (RADIUS - len) * Math.sin(i));
    }
}

function initBackground(){
    var bg = new PIXI.Graphics();

    bg.position.set(CENTER_X, CENTER_Y);
    bg.lineStyle(2, 0xececec, 1);
    bg.drawCircle(0, 0, RADIUS);

    drawAxe(bg, Math.PI/6, MAX_AXE_LEN);
    drawAxe(bg, Math.PI/30, MIN_AXE_LEN);

    return bg;
}

function createHand(l, w){
    var h = new PIXI.Graphics();

    h.position.set(CENTER_X, CENTER_Y);
    h.lineStyle(w, 0xececec, 1);
    h.moveTo(0, l/6);
    h.lineTo(0, -l);

    return h;
}

function initRenderer(){
    if (!renderer){
        renderer = new PIXI.autoDetectRenderer(WIDTH, WIDTH, {transparent: true, antialias: true});

        renderer._stage = new PIXI.Container();

        renderer._bg = initBackground();
        renderer._stage.addChild(renderer._bg);

        renderer._hourhand = createHand(40, 4);
        renderer._stage.addChild(renderer._hourhand);

        renderer._minhand = createHand(80, 2);
        renderer._stage.addChild(renderer._minhand);

        renderer._sechand = createHand(80, 1);
        renderer._stage.addChild(renderer._sechand);

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

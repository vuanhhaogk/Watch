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

function drawAxe(type, obj, radius, step, len, c_radius){
    c_radius = c_radius || 0;
    for (var i = 0; i < 2 * Math.PI; i += step){
        switch (type){
            case 'line':
                obj.moveTo(radius * Math.cos(i), radius * Math.sin(i));
                obj.lineTo((radius - len) * Math.cos(i), (radius - len) * Math.sin(i));
                break;
            case 'dot':
                obj.drawCircle(radius * Math.cos(i), radius * Math.sin(i), c_radius);
                break;
        }
    }
}

function initBackground(){
    var bg = new PIXI.Graphics();

    bg.position.set(CENTER_X, CENTER_Y);
    bg.lineStyle(1, 0xcecece, 1);

    bg.drawCircle(0, 0, RADIUS);

    drawAxe('line', bg, RADIUS - 3,  Math.PI/30, MIN_AXE_LEN);
    bg.lineStyle(4, 0xcecece, 1);
    drawAxe('line', bg, RADIUS - 1 - MAX_AXE_LEN, Math.PI/6, MAX_AXE_LEN);

    bg.lineStyle(0, 0x000000, 0);
    bg.beginFill(0xcecece, 1);
    drawAxe('dot', bg, RADIUS - 3 - MIN_AXE_LEN/2, Math.PI/6, MIN_AXE_LEN, MIN_AXE_LEN/2);

    bg.drawCircle(0, 0, 4);

    return bg;
}

function createHand(l, w){
    var h = new PIXI.Graphics();

    h.position.set(CENTER_X, CENTER_Y);
    h.lineStyle(1, 0xececec, 1);
    h.beginFill(0xececec, .4);
    h.drawRect(-w/2, - l + l/6, w, l);

    return h;
}

function initRenderer(){
    if (!renderer){
        renderer = new PIXI.autoDetectRenderer(WIDTH, WIDTH, {transparent: true, antialias: true});

        renderer._stage = new PIXI.Container();

        renderer._bg = initBackground();
        renderer._stage.addChild(renderer._bg);

        renderer._hourhand = createHand(60, 4);
        renderer._stage.addChild(renderer._hourhand);

        renderer._minhand = createHand(100, 2);
        renderer._stage.addChild(renderer._minhand);

        renderer._sechand = createHand(100, 1);
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

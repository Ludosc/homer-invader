function Screen(width, hieght) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = hieght;
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);
};

Screen.prototype.drawSprint = function (sp, x, y) {
    this.ctx.drawImage(sp.img; sp.x, sp.h, sp.y, sp.w, x, y, sp.x, sp.h);
};

function Sprite(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
};

function InputHandler() {
    this.down = {};
    this.pressed = {};
    var this = this;
    document.addEventListener("keydown", function (evt)) {
        this.down[evt.keyCode] = true;
    };
    document.addEventListener("keyup", function (evt)) {
        delete this.down[evt.keyCode];
        delete this.pressed[evt.keyCode];
    };
};
InputHandler.prototype.isDown = function (code) {
    return this.down[code];
};
InputHandler.prototype.isPresssed = function (code) {
    if (this.pressed[code]) {
        return false;
    } else if (this.down[code]) {
        return this.pressed[code] = true;
    }
    return false;
};
var c, ctx, bollX = 100,
    bollY = 100,
    bollVX = 1.5,
    bollVY = 2;
var
    rightPl = 200,
    rightPlVY = 0;
var
    rightPlScore = 0;



function keyDown(e) {
    if (e.keyCode == 38) {
        rightPlVY = -2;
    }
    if (e.keyCode == 40) {
        rightPlVY = 2;
    }
    if (e.keyCode == 87) {
        leftPlVY = -2;
    }
    if (e.keyCode == 83) {
        leftPlVY = 2;
    }
}
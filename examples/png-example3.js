var fs  = require('fs');
var sys = require('sys');
var Png = require('../png').Png;
var Buffer = require('buffer').Buffer;

var WIDTH = 400, HEIGHT = 300;

var rgba = new Buffer(WIDTH*HEIGHT*4);

for (var i=0; i<HEIGHT; i++) {
    for (var j=0; j<WIDTH; j++) {
        rgba[i*WIDTH*4 + j*4 + 0] = 255*j/WIDTH;
        rgba[i*WIDTH*4 + j*4 + 1] = 255*i/HEIGHT;
        rgba[i*WIDTH*4 + j*4 + 2] = 0xff/2;
        rgba[i*WIDTH*4 + j*4 + 3] = 0x00;
    }
}

var png = new Png(rgba, WIDTH, HEIGHT);

fs.writeFileSync('./png-gradient.png', png.encode(), 'binary');

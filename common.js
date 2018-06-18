// DOM helper

var Dom = {


}


// general purpose helper

var Util = {

}



// polyfill for rAF

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
                                 window.mozRequestAnimationFrame    ||
                                 window.oRequestAnimationFrame      ||
                                 window.msRequestAnimationFrame     ||
                                 function(callback, element) {
                                   window.setTimeout(callback, 1000 / 60);
                                 }
}


//Game loop helper

var Game = {

}


//canvas rendering helper

var Render = {


}


//racing game constants


var KEY = {

};


var COLORS = {

};

var BACKGROUND = {

};


var SPRITES = {

};

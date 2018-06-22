var fps           = 30;                      // how many 'update' frames per second
var step          = 0.5/fps;                 // how long is each frame (in seconds)
var width         = 600;                     // logical canvas width
var height        = 360;                     // logical canvas height
var segments      = [];                      // array of road segments
var canvas        = Dom.get('canvas');       // our canvas...
var ctx           = canvas.getContext('2d'); // ...and its drawing context
ctx.imageSmoothingEnabled = false;
var sprites       = null;                    // our spritesheet (loaded below)
var resolution    = null;                    // scaling factor to provide resolution independence (computed)
var roadWidth     = 2000;                    // actually half the roads width, easier math if the road spans from -roadWidth to +roadWidth
var segmentLength = 200;                     // length of a single segment
var rumbleLength  = 2.4;                     // number of segments per red/white rumble strip
var trackLength   = null;                    // z length of entire track (computed)
var lanes         = 3;                       // number of lanes
var fieldOfView   = 130;                     // angle (degrees) for field of view
var cameraHeight  = 650;                     // z height of camera
var cameraDepth   = null;                    // z distance camera is from screen (computed)
var drawDistance  = 300;                     // number of segments to draw
var playerX       = 0;                       // player x offset from center of road (-1 to 1 to stay independent of roadWidth)
var playerZ       = null;                    // player relative z distance from camera (computed)
var fogDensity    = 1;                       // exponential fog density
var position      = 0;                       // current camera Z position (add playerZ to get player's absolute Z position)
var speed         = 0;                       // current speed
var maxSpeed      = 2*segmentLength/step;    // top speed (ensure we can't move more than 1 segment in a single frame to make collision detection easier)
var accel         = 2* maxSpeed/5;           // acceleration rate - tuned until it 'felt' right
var breaking      = -maxSpeed;               // deceleration rate when braking
var decel         = -maxSpeed/5;             // 'natural' deceleration rate when neither accelerating, nor braking
var offRoadDecel  = -maxSpeed/1.3;           // off road deceleration is somewhere in between
var offRoadLimit  =  maxSpeed/4;             // limit when off road deceleration no longer applies (e.g. you can always go at least this speed even when off road)

//  Curve road

var centrifugal   = 0.3;                     // centrifugal force multiplier when going around curves
var skySpeed      = 0.0006;                   // background sky layer scroll speed when going around curve (or up hill)
var hillSpeed     = 0.0002;                   // background hill layer scroll speed when going around curve (or up hill)
var treeSpeed     = 0.003;                   // background tree layer scroll speed when going around curve (or up hill)
var skyOffset     = 0;                       // current sky scroll offset
var hillOffset    = 0;                       // current hill scroll offset
var treeOffset    = 0;                       // current tree scroll offset

// Cars

var cars        = [];
var totalCars   = 160;

// Keys

var keyLeft       = false;
var keyRight      = false;
var keyFaster     = false;
var keySlower     = false;

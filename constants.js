var KEY = {
  LEFT:  37,
  UP:    38,
  RIGHT: 39,
  DOWN:  40,
  A:     65,
  D:     68,
  S:     83,
  W:     87
};

var COLORS = {
  FOG:  '#541fff',
  // FOG:  'black',
  LIGHT:  { road: 'black', grass: 'black', rumble: '#541fff', lane: 'white'  },
  DARK:   { road: 'black', grass: 'black', rumble: '#black'               },
  START:  { road: 'black',   grass: 'black',   rumble: 'black'  },
  FINISH: { road: 'black',   grass: 'black',   rumble: 'black'  }
};

var BACKGROUND = {
  HILLS: { x:   5, y:   5, w: 1280, h: 480 },
  SKY:   { x:   5, y: 495, w: 1280, h: 480 },
  TREES: { x:   5, y: 985, w: 1280, h: 480 }
};

var ROAD = {
  LENGTH: { NONE: 0, SHORT:  25, MEDIUM:  50, LONG:  100 , DAMN:   150},
  CURVE:  { NONE: 0, EASY:    2, MEDIUM:   4, HARD:    6, SUPER:    9},
  HILL:   { NONE: 0, LOW:    20, MEDIUM:  40, HIGH:   60, WAT:  120 },
};

var SPRITES = {

  PALM_TREE:            {x:18, y:2276, w:5075, h:2303},




  BILLBOARD08:            {x: 44,  y:  10067, w: 4248, h: 1729 },



  TREE1:                  { x:  625, y:    5, w:  360, h:  360 },




  DEAD_TREE1:             {x:4309, y:5296, w:3593, h:5307},





  BILLBOARD09:            {x:64, y:5878, w:4128, h:4145},

  BOULDER3:              {x: 44,  y:  10067, w: 4248, h: 1729 },


  COLUMN:                {x: 44,  y:  10067, w: 4248, h: 1729 },

  BILLBOARD01:             {x:64, y:5878, w:4128, h:4145},

  BILLBOARD06:             {x: 44,  y:  10067, w: 4248, h: 1729 },

  BILLBOARD05:            {x:64, y:4653, w:2424, h:1181},

  BOULDER2:                {x:64, y:5878, w:4128, h:4145},

  TREE2:                   {x:64, y:4653, w:2424, h:1181},

  BILLBOARD04:           {x: 44,  y:  10067, w: 4248, h: 1729 },

  DEAD_TREE2:            {x:64, y:5878, w:4128, h:4145},



  BOULDER1:                {x:4309, y:5296, w:3593, h:5307},



  BUSH1:                 {x: 44,  y:  10067, w: 4248, h: 1729 },

  CACTUS:                 {x: 4519, y: 11041, w: 487, h: 730 },

  BUSH2:                 {x:18, y:2276, w:5075, h:2303},

  BILLBOARD03:            {x: 44,  y:  10067, w: 4248, h: 1729 },

  BILLBOARD02:            { x:  245, y: 1262, w:  215, h:  220 },

  STUMP:                  { x:  995, y:  330, w:  195, h:  140 },



  CHINATOWN:               {x: 44,  y:  10067, w: 4248, h: 1729 },
  NEOTOWER:                {x:64, y:5878, w:4128, h:4145},
  DARKTOWER:               {x:4309, y:5296, w:3593, h:5307},
  ATARISHOP:               {x:64, y:4653, w:2424, h:1181},
  PALM_TREE:               {x:18, y:2276, w:5075, h:2303},
  CINEMA:                  {x: 10,  y:  420, w: 5050, h: 1796 },
  STREETLAMP:              {x: 4519, y: 11041, w: 487, h: 730 },
  JOI:                     {x: 5165, y: 1690, w: 3841, h: 2905 },







  SEMI:                   { x: 658, y:  12056, w:  357, h:   165 },
  TRUCK:                  { x: 658, y:  12056, w:  357, h:   165 },
  CAR03:                  { x: 1786, y:  11972, w:   225, h:   197 },
  CAR02:                  { x: 1306, y:  11977, w:   289, h:   191 },
  CAR04:                  { x: 1047, y:  11996, w:   238, h:   217 },
  CAR01:                  { x: 323, y: 12081, w:   323, h:   153 },

  PLAYER_STRAIGHT:        { x: 1018, y:  12221, w:   238, h:   185 },
  PLAYER_LEFT:            { x:  315, y:  12243, w:   340, h:   161 },
  PLAYER_RIGHT:           { x:  662, y:  12238, w:   334, h:   159 },
  PLAYER_UPHILL_STRAIGHT: { x: 1319, y: 12189, w:   234, h:   229 },
  PLAYER_UPHILL_LEFT:     { x: 1583, y:  12186, w:   317, h:   208 },
  PLAYER_UPHILL_RIGHT:    { x: 1910, y: 12193, w:   331, h:   210 }
};

SPRITES.SCALE = 0.21 * (1/SPRITES.PLAYER_STRAIGHT.w)

SPRITES.BILLBOARDS = [SPRITES.CHINATOWN, SPRITES.NEOTOWER, SPRITES.ATARISHOP, SPRITES.PALM_TREE, SPRITES.CINEMA, SPRITES.STREETLAMP, SPRITES.DARKTOWER ];
SPRITES.BUILDINGS = [SPRITES.CHINATOWN, SPRITES.NEOTOWER, SPRITES.ATARISHOP, SPRITES.PALM_TREE, SPRITES.CINEMA, SPRITES.STREETLAMP, SPRITES.DARKTOWER];
SPRITES.PLANTS     = [SPRITES.ATARISHOP, SPRITES.PALM_TREE, SPRITES.CINEMA, SPRITES.STREETLAMP, SPRITES.TREE1, SPRITES.TREE2, SPRITES.DEAD_TREE1, SPRITES.DEAD_TREE2, SPRITES.PALM_TREE, SPRITES.BUSH1, SPRITES.BUSH2, SPRITES.CACTUS, SPRITES.STUMP, SPRITES.BOULDER1, SPRITES.BOULDER2, SPRITES.BOULDER3];
SPRITES.CARS       = [SPRITES.CAR01, SPRITES.CAR02, SPRITES.CAR03, SPRITES.CAR04, SPRITES.SEMI, SPRITES.TRUCK];

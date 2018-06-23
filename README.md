Welcome to the Blade-Racer wiki!

This is my first game project inspired by old school pseudo 3d technique and my favorite movie Blade Runner.

live demo:   [SIT TIGHT!](https://1a2b3c4dboban.github.io/Blade-Racer/)

## Current Features

* Control the car with keyboard
* Browse the amazing retro future city
* Experience different road geometry
* build a game loop
* render pseudo 3d road geometry
* render the background
* enable keyboard support to drive the car

## Wireframes

This app will consist a full-screen canvas displaying everything within.

Above is the game start wireframe, only with game start button and mute sound button.

![wireframe](https://raw.githubusercontent.com/1a2b3c4dBobAn/Blade-Racer/master/GitPics/bladeracerwireframe.png)
Above is the racing game wireframe, on top right there are stop button.


## Code snippet

```javascript

    function addRoad(enter, hold, leave, curve, y) {
      var startY   = lastY();
      var endY     = startY + (Util.toInt(y, 0) * segmentLength);
      var n, total = enter + hold + leave;
      for(n = 0 ; n < enter ; n++)
        addSegment(Util.easeIn(0, curve, n/enter), Util.easeInOut(startY, endY, n/total));
      for(n = 0 ; n < hold  ; n++)
        addSegment(curve, Util.easeInOut(startY, endY, (enter+n)/total));
      for(n = 0 ; n < leave ; n++)
        addSegment(Util.easeInOut(curve, 0, n/leave), Util.easeInOut(startY, endY, (enter+hold+n)/total));
    }

    function addStraight(num) {
      num = num || ROAD.LENGTH.MEDIUM;
      addRoad(num, num, num, 0, 0);
    }

    function addCurve(num, curve,height) {
      num    = num    || ROAD.LENGTH.MEDIUM;
      curve  = curve  || ROAD.CURVE.MEDIUM;
      height = height || 0
      addRoad(num, num, num, curve, height);
    }

    function addHill(num, height) {
      num = num || ROAD.LENGTH.MEDIUM;
      height = height || ROAD.HILL.LOW;
      addRoad(num, num, num, 0, height);
    }

```

## Technologies

## Futrue features

This app will consist a full-screen canvas displaying everything within.


## tutorial reference:
https://codeincomplete.com/                         shout out for Jake Gordon!

http://www.extentofthejam.com/pseudo/               shout out for Lou!

Many thanks for Ridley Scott Denis Villeneuve to create these fantastic movies.

## Art sources:

Some of art resources come from the orginal movies.

Others comes from the following artists, many thanks for their fantastic works
https://sketchfab.com/models/8cf75234d5ff4baf923bdabefd1ab9b7?ref=related


The background music is the work of German artist Zombie HyperDrive
https://www.youtube.com/watch?v=NZf15xVrOW8

All images appeared in game are re-edited by Bob An

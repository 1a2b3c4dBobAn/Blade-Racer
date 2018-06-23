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

The Road in this project is one of the biggest challenge, a individual file named roadeditor is here to handle the problem. The addRoad function can take multiple argumenets to create the different road geometry.

```javascript

    const addRoad = (enter, hold, leave, curve, y) => {
      var startY   = lastY();
      var endY     = startY + (Util.toInt(y * segmentLength);
      var n, total = enter + hold + leave;
      for(n = 0 ; n < enter ; n++)
        addSegment(Util.easeIn(0, curve, n/enter), Util.easeInOut(startY, endY, n/total));
      for(n = 0 ; n < hold  ; n++)
        addSegment(curve, Util.easeInOut(startY, endY, (enter+n)/total));
      for(n = 0 ; n < leave ; n++)
        addSegment(Util.easeInOut(curve, 0, n/leave), Util.easeInOut(startY, endY, (enter+hold+n)/total));
    }

```
With addRoad, we can create several different helper functions to customized the road.
```javascript

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
A function called resetRoad then can use the road create function above to make the whole road.

```javascript

    function resetRoad() {
      segments = [];

      addStraight(ROAD.LENGTH.SHORT/3);
      addLowRollingHills(ROAD.LENGTH.MEDIUM, ROAD.HILL);
      addStraight(ROAD.LENGTH.SHORT/4);
      addSCurves();
      addCurve(ROAD.LENGTH.MEDIUM, ROAD.CURVE.EASY);
      addLowRollingHills(ROAD.LENGTH.MEDIUM, -ROAD.HILL.WAT);
      addCurve(ROAD.LENGTH.LONG, -ROAD.CURVE.SUPER);
      addStraight();
      addLowRollingHills(ROAD.LENGTH.MEDIUM, ROAD.HILL.MEDIUM);
      addCurve(ROAD.LENGTH.LONG, -ROAD.CURVE.MEDIUM);
      addCurve(ROAD.LENGTH.LONG, ROAD.CURVE.SUPER);
      addStraight();
      addSCurves();
      addLowRollingHills(ROAD.LENGTH.MEDIUM, -ROAD.HILL.MEDIUM);
      addStraight(ROAD.LENGTH.SHORT);
      addDownhillToEnd();
      ...
      }
```

## Technologies

## Futrue features

This app will consist a full-screen canvas displaying everything within.


## tutorial reference:
https://codeincomplete.com/     The project followed Jake Gordon's tutorial,it couldn't be done without his work

http://www.extentofthejam.com/pseudo/                   The concept of pseudo 3d is well explained by Lou's blog

Many thanks for Ridley Scott Denis Villeneuve to create these fantastic movies.

## Art sources:

Some of art resources come from the orginal movies.

Others comes from the following artists, many thanks for their fantastic works
https://sketchfab.com/models/8cf75234d5ff4baf923bdabefd1ab9b7?ref=related


The background music is the work of German artist Zombie HyperDrive
https://www.youtube.com/watch?v=NZf15xVrOW8

All images appeared in game are re-edited by Bob An

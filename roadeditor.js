    function lastY() { return (segments.length == 0) ? 0 : segments[segments.length-1].p2.world.y; }

    function addSegment(curve, y) {
      var n = segments.length;
      segments.push({
          index: n,
             p1: { world: { y: lastY(), z:  n   *segmentLength }, camera: {}, screen: {} },
             p2: { world: { y: y,       z: (n+1)*segmentLength }, camera: {}, screen: {} },
          curve: curve,
        sprites: [],
           cars: [],
          color: Math.floor(n/rumbleLength)%2 ? COLORS.DARK : COLORS.LIGHT
      });
    }




    //ADD ROAD

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


    function addLowRollingHills(num, height) {
        num    = num    || ROAD.LENGTH.SHORT;
        height = height || ROAD.HILL.LOW;
        addRoad(num, num, num,  0,  height/2);
        addRoad(num, num, num,  0, -height);
        addRoad(num, num, num,  ROAD.CURVE.EASY,  ROAD.HILL.MEDIUM);
        addRoad(num, num, num,  0,  0);
        addRoad(num, num, num,  -ROAD.CURVE.HARD,  -ROAD.HILL.MEDIUM);
        addRoad(num, num, num,  0,  0);
    }

    function addSCurves() {
      addRoad(ROAD.LENGTH.MEDIUM, ROAD.LENGTH.SHORT, ROAD.LENGTH.DAMN,  -ROAD.CURVE.EASY, ROAD.HILL.LOW);
      addRoad(ROAD.LENGTH.MEDIUM, ROAD.LENGTH.MEDIUM, ROAD.LENGTH.MEDIUM,   ROAD.CURVE.EASY);
      addRoad(ROAD.LENGTH.MEDIUM, ROAD.LENGTH.MEDIUM, ROAD.LENGTH.DAMN,  -ROAD.CURVE.HARD,  ROAD.HILL.MEDIUM);
      addRoad(ROAD.LENGTH.MEDIUM, ROAD.LENGTH.MEDIUM, ROAD.LENGTH.MEDIUM,  -ROAD.CURVE.SUPER, -ROAD.HILL.LOW);
      addRoad(ROAD.LENGTH.MEDIUM, ROAD.LENGTH.MEDIUM, ROAD.LENGTH.MEDIUM,  ROAD.CURVE.SUPER, ROAD.HILL.LOW);
    }

    function addDownhillToEnd(num) {
      num = num || 200;
      addRoad(num, num, num, -ROAD.CURVE.EASY, -lastY()/segmentLength);
    }

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
      addSCurves();
      addLowRollingHills(ROAD.LENGTH.MEDIUM, ROAD.HILL.MEDIUM);
      addCurve(ROAD.LENGTH.LONG, -ROAD.CURVE.MEDIUM);
      addCurve(ROAD.LENGTH.LONG, ROAD.CURVE.SUPER);
      addStraight();
      addSCurves();
      addLowRollingHills(ROAD.LENGTH.MEDIUM, -ROAD.HILL.MEDIUM);
      addStraight(ROAD.LENGTH.SHORT);
      addDownhillToEnd();

      resetSprites();
      resetCars();

      segments[findSegment(playerZ).index + 2].color = COLORS.START;
      segments[findSegment(playerZ).index + 3].color = COLORS.START;
      for(var n = 0 ; n < rumbleLength ; n++)
        segments[segments.length-1-n].color = COLORS.FINISH;

      trackLength = segments.length * segmentLength;
    }



    //SPRITES

    function addSprite(n, sprite, offset){
      segments[n].sprites.push({ source: sprite, offset: offset });
    }



    function resetSprites() {
      var n, i;


      addSprite(10, SPRITES.PALM_TREE, -1);
      addSprite(15, SPRITES.STREETLAMP, -1);
      addSprite(20, SPRITES.NEOTOWER, -1);
      addSprite(40, SPRITES.NEOTOWER, -1);
      addSprite(60, SPRITES.DARKTOWER, -1);
      addSprite(60, SPRITES.STREETLAMP, -1);
      addSprite(640, SPRITES.JOI, -1);
      addSprite(1240, SPRITES.JOI, -1);
      addSprite(60, SPRITES.CINEMA, 1);
      addSprite(100, SPRITES.ATARISHOP, 1);
      addSprite(120, SPRITES.NEOTOWER, 1);
      addSprite(140, SPRITES.ATARISHOP, 1);
      addSprite(160, SPRITES.DARKTOWER, 1);
      addSprite(200, SPRITES.DARKTOWER, -1);
      addSprite(110, SPRITES.PALM_TREE, -1);
      addSprite(215, SPRITES.STREETLAMP, -1);
      addSprite(220, SPRITES.NEOTOWER, -1);
      addSprite(160, SPRITES.NEOTOWER, -1);
      addSprite(2300, SPRITES.JOI, -1);

      addSprite(240,                  SPRITES.CHINATOWN,  1.2);
      addSprite(segments.length - 25, SPRITES.CHINATOWN,  1.2);
      addSprite(100,                  SPRITES.DARKTOWER,  1.2);
      addSprite(segments.length - 25, SPRITES.CHINATOWN,  1.2);


      for(n = 10 ; n < 100 ; n += 20 + Math.floor(n/100)) {
        addSprite(n, SPRITES.PALM_TREE, 0.5 + Math.random()*0.5);
        addSprite(n, SPRITES.COLUMN,   1 + Math.random()*2);
      }

      for(n = 250 ; n < 500 ; n += 5) {
        addSprite(n,     SPRITES.STREETLAMP, 1.1);
        addSprite(n + Util.randomInt(0,5), SPRITES.CINEMA, -1 - (Math.random() * 2));
        addSprite(n + Util.randomInt(0,5), SPRITES.PALM_TREE, -1 - (Math.random()));
      }

      for(n = 200 ; n < segments.length ; n += 3) {
        addSprite(n, Util.randomChoice(SPRITES.BUILDINGS), Util.randomChoice([1,-1]) * (2 + Math.random() * 5));
      }

      var side, sprite, offset;
      for(n = 1000 ; n < (segments.length-50) ; n += 50) {
        side      = Util.randomChoice([1, -1]);
        addSprite(n + Util.randomInt(0, 50), Util.randomChoice(SPRITES.BUILDINGS), -side);
        for(i = 0 ; i < 20 ; i++) {
          sprite = Util.randomChoice(SPRITES.BUILDINGS);
          offset = side * (1.5 + Math.random());
          addSprite(n + Util.randomInt(0, 50), sprite, offset);
        }
      }
    }





    function resetCars() {
      cars = [];
      var n, car, segment, offset, z, sprite, speed;
      for (var n = 0 ; n < totalCars ; n++) {
        offset = Math.random() * Util.randomChoice([-0.8, 0.8]);
        z      = Math.floor(Math.random() * segments.length) * segmentLength;
        sprite = Util.randomChoice(SPRITES.CARS);
        speed  = maxSpeed/4 + Math.random() * maxSpeed/(sprite == SPRITES.SEMI ? 4 : 2);
        car = { offset: offset, z: z, sprite: sprite, speed: speed };
        segment = findSegment(car.z);
        segment.cars.push(car);
        cars.push(car);
      }
    }

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 3;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var nivel= 0;
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  playSound("Pato-e-o-mapa-(Daviz45)-(Anima----o).mp3");
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "yellow";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "green";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "green";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "green";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "green";
car1.velocityY=2;
 car2.velocityY=-4; 
 car3.velocityY=4;
 car4.velocityY=-2;
 

function draw() {
  if (keyDown("right")){
    sam.x+=2;
  
  }
  if(keyDown("left")){
sam.x-=2;
  }
  if(keyDown("up")){
    sam.y-=2 ;
  }
  if (keyDown("down")){
    sam.y+=2;
  }
   background("white");
  text("Vidas: " + life,200,100);
  text("Nivel"+nivel,200,50);
  strokeWeight(0);
  fill("black");
  rect(0,120,52,140);
  fill("black");
  rect(345,120,52,140);
  car1.bounceOff(boundary2);
  car1.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car2.bounceOff(boundary1);
   car3.bounceOff(boundary2);
  car3.bounceOff(boundary1);
   car4.bounceOff(boundary2);
  car4.bounceOff(boundary1);
if (sam.x > 350){
  nivel=nivel +1; sam.x=20;
}
if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  sam.x=20;
  sam.y=200;
  life=life-1;
}
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

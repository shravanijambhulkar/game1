var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8850a04f-8cac-445d-84da-517b31689629","fb6907be-8091-457d-b0a1-36a1fc664a64","fa683e34-e4d6-42a7-ba44-6e7cb97e0c5e","d5127b3c-1801-4570-bcc6-68b178fd29a8"],"propsByKey":{"8850a04f-8cac-445d-84da-517b31689629":{"name":"pacman555.jpg_1","sourceUrl":null,"frameSize":{"x":728,"y":455},"frameCount":1,"looping":true,"frameDelay":12,"version":"W.OHj6GEe91paGb8zk5GEWKY6KE0OBo8","loadedFromSource":true,"saved":true,"sourceSize":{"x":728,"y":455},"rootRelativePath":"assets/8850a04f-8cac-445d-84da-517b31689629.png"},"fb6907be-8091-457d-b0a1-36a1fc664a64":{"name":"pacman555.jpg_2_1","sourceUrl":"assets/v3/animations/MxSZ5xqsGnkyzv3eeziuXz8IXhEReE1UK4MOwUY6QT8/fb6907be-8091-457d-b0a1-36a1fc664a64.png","frameSize":{"x":214,"y":235},"frameCount":1,"looping":true,"frameDelay":4,"version":"jbQGG8gGbd7JXtrXkGnunvOjLzumtbzY","loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":235},"rootRelativePath":"assets/v3/animations/MxSZ5xqsGnkyzv3eeziuXz8IXhEReE1UK4MOwUY6QT8/fb6907be-8091-457d-b0a1-36a1fc664a64.png"},"fa683e34-e4d6-42a7-ba44-6e7cb97e0c5e":{"name":"pacman555.jpg_3","sourceUrl":"assets/v3/animations/MxSZ5xqsGnkyzv3eeziuXz8IXhEReE1UK4MOwUY6QT8/fa683e34-e4d6-42a7-ba44-6e7cb97e0c5e.png","frameSize":{"x":728,"y":455},"frameCount":1,"looping":true,"frameDelay":4,"version":"6mmPKldDUVRxadwRBfEi6tM_ta4pw92L","loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":235},"rootRelativePath":"assets/v3/animations/MxSZ5xqsGnkyzv3eeziuXz8IXhEReE1UK4MOwUY6QT8/fa683e34-e4d6-42a7-ba44-6e7cb97e0c5e.png"},"d5127b3c-1801-4570-bcc6-68b178fd29a8":{"name":"images.png_1","sourceUrl":"assets/v3/animations/MxSZ5xqsGnkyzv3eeziuXz8IXhEReE1UK4MOwUY6QT8/d5127b3c-1801-4570-bcc6-68b178fd29a8.png","frameSize":{"x":213,"y":236},"frameCount":1,"looping":true,"frameDelay":4,"version":"2GNPROUzSZW0NNMAsmnAyW0wms8KL_Z_","loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":236},"rootRelativePath":"assets/v3/animations/MxSZ5xqsGnkyzv3eeziuXz8IXhEReE1UK4MOwUY6QT8/d5127b3c-1801-4570-bcc6-68b178fd29a8.png"}}};
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

var paddle = createSprite(200, 375, 50, 15);
paddle.shapeColor=("white");
var ball = createSprite(150, 250, 20, 20);
ball.shapeColor=("white");
ball.setAnimation("pacman555.jpg_3");
ball.scale= 0.1;



var score=0;
var gameState ="serve";

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="darkgrey";
box1.setAnimation("images.png_1");
box1.scale=0.2;
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box2.setAnimation("images.png_1");
box2.scale=0.2;
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box3.setAnimation("images.png_1");
box3.scale=0.2;
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box4.setAnimation("images.png_1");
box4.scale=0.2;
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
box5.setAnimation("images.png_1");
box5.scale=0.2;
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
box6.setAnimation("images.png_1");
box6.scale=0.2;
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box7.setAnimation("images.png_1");
box7.scale=0.2;
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
box8.setAnimation("images.png_1");
box8.scale=0.2;


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
box9.setAnimation("images.png_1");
box9.scale=0.2;
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box10.setAnimation("images.png_1");
box10.scale=0.2;
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box11.setAnimation("images.png_1");
box11.scale=0.2;
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box12.setAnimation("images.png_1");
box12.scale=0.2;
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
box13.setAnimation("images.png_1");
box13.scale=0.2;
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
box14.setAnimation("images.png_1");
box14.scale=0.2;
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box15.setAnimation("images.png_1");
box15.scale=0.2;
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
box16.setAnimation("images.png_1");
box16.scale=0.2;


var box17 = createSprite(25, 175, 50, 50);
box17.shapeColor="red";
box17.setAnimation("images.png_1");
box17.scale=0.2;
var box18 = createSprite(75, 175, 50, 50);
box18.shapeColor="blue";
box18.setAnimation("images.png_1");
box18.scale=0.2;
var box19 = createSprite(125, 175, 50, 50);
box19.shapeColor="red";
box19.setAnimation("images.png_1");
box19.scale=0.2;
var box20 = createSprite(175, 175, 50, 50);
box20.shapeColor="blue";
box20.setAnimation("images.png_1");
box20.scale=0.2;
var box21 = createSprite(225, 175, 50, 50);
box21.shapeColor="red";
box21.setAnimation("images.png_1");
box21.scale=0.2;
var box22 = createSprite(275, 175, 50, 50);
box22.shapeColor="blue";
box22.setAnimation("images.png_1");
box22.scale=0.2;
var box23 = createSprite(325, 175, 50, 50);
box23.shapeColor="red";
box23.setAnimation("images.png_1");
box23.scale=0.2;
var box24 = createSprite(375, 175, 50, 50);
box24.shapeColor="blue";
box24.setAnimation("images.png_1");
box24.scale=0.2;






function draw() {
  background("black");
  
   textSize(15);
  stroke("red");
  text("Score :"+score,330,20);
  
  if(gameState == "serve")
  {
  //display welcome text
    textSize(25);
    text("Welcome! Press Enter to start.",30,200);
     //Moving the ball on pressing enter key
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    gameState = "play";
  }
  
  }
  
  if(gameState == "play")
  {
   //Moving the paddle with mouse along the x-axis
  paddle.x=World.mouseX;
  if(ball.isTouching(bottomEdge)|| score === 24){
    gameState = "end";
  }
  }
  
  if(gameState == "end")
  
  {
    ball.velocityX = 0;
  ball.velocityY = 0;
    textSize(15);
    text("GAMEOVER",150,250);
  }
  
  
  
  
  //Making the ball bounceOff the paddle and three sides of canvas
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);



 
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  
  if(ball.isTouching(box17))
  {
    score=score+1;
    box17.destroy();
  }
  if(ball.isTouching(box18))
  {
    score=score+1;
    box18.destroy();
  }
  if(ball.isTouching(box19))
  {
    score=score+1;
    box19.destroy();
  }
  if(ball.isTouching(box20))
  {
    score=score+1;
    box20.destroy();
  }
  if(ball.isTouching(box21))
  {
    score=score+1;
    box21.destroy();
  }
  if(ball.isTouching(box22))
  {
    score=score+1;
    box22.destroy();
  }
  
   if(ball.isTouching(box23))
  {
    score=score+1;
    box23.destroy();
  }
  
   if(ball.isTouching(box24))
  {
    score=score+1;
    box24.destroy();
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

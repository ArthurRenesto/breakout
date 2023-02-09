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

var EstadoDojogo = "start";


//caixas de cima
var caixa1 = createSprite(25, 75, 50, 50);
caixa1.shapeColor="red";
var caixa2 = createSprite(75, 75, 50, 50);
caixa2.shapeColor="blue";
var caixa3 = createSprite(125, 75, 50, 50);
caixa3.shapeColor="red";
var caixa4 = createSprite(175, 75, 50, 50);
caixa4.shapeColor="blue";
var caixa5 = createSprite(225, 75, 50, 50);
caixa5.shapeColor="red";
var caixa6 = createSprite(275, 75, 50, 50);
caixa6.shapeColor="blue";
var caixa7 = createSprite(325, 75, 50, 50);
caixa7.shapeColor="red";
var caixa8 = createSprite(375, 75, 50, 50);
caixa8.shapeColor="blue";

//caixas de baixo
var caixa9 = createSprite(25, 125, 50, 50);
caixa9.shapeColor="blue";
var caixa10 = createSprite(75, 125, 50, 50);
caixa10.shapeColor="red";
var caixa11 = createSprite(125, 125, 50, 50);
caixa11.shapeColor="blue";
var caixa12 = createSprite(175, 125, 50, 50);
caixa12.shapeColor="red";
var caixa13 = createSprite(225,125, 50, 50);
caixa13.shapeColor="blue";
var caixa14 = createSprite(275, 125, 50, 50);
caixa14.shapeColor="red";
var caixa15 = createSprite(325, 125, 50, 50);
caixa15.shapeColor="blue";
var caixa16 = createSprite(375, 125, 50, 50);
caixa16.shapeColor="red";


  var raquete;
  raquete =createSprite(200,390,97,5);


  var bola;
  bola = createSprite(200,200,10,10);
  bola.velocityX=0;
  bola.velocityY=0;

  var score = 0;
   
function draw() 
{
  background("black");
  gameplay();

  text("pontuação: "+score,300,15);
//para uma linha //, para varias /* */
 
      
 

 if (EstadoDojogo ==="start"){
   fill ("red");
   stroke("black");
   textSize(19);
   text("aperte space para começar",84,250);
 }

 if(keyDown("space")&& EstadoDojogo === "start")
    {
      EstadoDojogo = "play";
      bola.velocityX =6;
      bola.velocityY =6;
    }
      
  if(EstadoDojogo === "play")
  {
    
      gameplay();
      
       if(bola.isTouching(raquete))
      {
        playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
      }  
  
     if (bola.y>=400 || score === 16 )
      {
        EstadoDojogo = "end";
      }
    
  }

 

  if (EstadoDojogo === "end")
  {
    
    bola.velocityX=0;
    bola.velocityY=0;
    
    if(bola.y>=400)
    {
      fill ("red");
      stroke("black");
      textSize(19);
      text ("você perdeu, tente novamente",84,200);
    }  
    else if(score === 16)
    {
        fill ("yellow");
        stroke("black");
        textSize("20");
        text ("VOCê VENCEU, PARABÉNS!!",84,200);
    }    
    
  }





  drawSprites();
}
function gameplay() {
if (bola.isTouching(caixa1))
  {
  bola.bounceOff(caixa1);
  caixa1.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  
  if (bola.isTouching(caixa2))
  {
  bola.bounceOff(caixa2); 
  caixa2.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  
  if (bola.isTouching(caixa3))
  {
  
   bola.bounceOff(caixa3);
   caixa3.destroy();
   score=score+1;
   playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  
  if (bola.isTouching(caixa4))
  {
    bola.bounceOff(caixa4);
  caixa4.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa5))
  {
    bola.bounceOff(caixa5);
  caixa5.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa6))
  {
    bola.bounceOff(caixa6);
  caixa6.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa7))
  {
    bola.bounceOff(caixa7);
  caixa7.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa8))
  {
    bola.bounceOff(caixa8);
  caixa8.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa9))
  {
    bola.bounceOff(caixa9);
  caixa9.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  
  if (bola.isTouching(caixa10))
  {
    bola.bounceOff(caixa10);
  caixa10.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa11))
  {
    bola.bounceOff(caixa11);
  caixa11.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa12))
  {
    bola.bounceOff(caixa12);
  caixa12.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa13))
  {
    bola.bounceOff(caixa13);
  caixa13.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa14))
  {
    bola.bounceOff(caixa14);
  caixa14.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa15))
  {
    bola.bounceOff(caixa15);
  caixa15.destroy();
  score=score+1;
  playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
  if (bola.isTouching(caixa16))
  {
    bola.bounceOff(caixa16);
    caixa16.destroy();
    score=score+1;
    playSound( "assets/category_pop/puzzle_game_ui_pop_tiny_02.mp3");
  }
 
  createEdgeSprites();
  bola.bounceOff(topEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  raquete.x=World.mouseX;
  
  bola.bounceOff(raquete);
 
  bola.bounceOff(caixa1);
  bola.bounceOff(caixa2);
  bola.bounceOff(caixa3);
  bola.bounceOff(caixa4);
  bola.bounceOff(caixa5);
  bola.bounceOff(caixa6);
  bola.bounceOff(caixa7);
  bola.bounceOff(caixa8);
  bola.bounceOff(caixa9);
  bola.bounceOff(caixa10);
  bola.bounceOff(caixa11);
  bola.bounceOff(caixa12);
  bola.bounceOff(caixa13);
  bola.bounceOff(caixa14);
  bola.bounceOff(caixa15);
  bola.bounceOff(caixa16);
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

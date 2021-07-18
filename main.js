var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14;
var wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26;
var wall27,wall28;
var hide1,hide2
var box1,box2,box3,box4,box5,box6,box7;

var hero,herorightrun,heroleftrun,herouprun,herodownrun;
var enemies;

var hr1,hr2,hr3,hr4,hl1,hl2,hl3,hl4;
var hrani,hlani;

var key,friend;

var keyimg,fimg;

var invill1,invill2,invill3,invill4,invill5;

var police1,police2,police3,police4;
var police1img,police2img,police3img,police4img;

var st;

var bg;

var joystick,joyimg,joymo,joymoimg;

function preload() {
    bg = loadImage("img/bgroom.png");
    hide2 = loadImage("img/hide2.png");
    hide1 = loadImage("img/hide1.png");
    hr1 = loadImage("img/herom1.png");
    hr2 = loadImage("img/heromle4.png");

    keyimg = loadImage("img/itzkey.png");

    police1img = loadImage("img/teist1.png");

    fimg = loadImage("img/itzfriend.png")

    // // hr2 = loadImage("img/herom2.png");
    // // hr3 = loadImage("img/herom3.png");    
    // // hr4 = loadImage("img/herom4.png");
    // // hl1 = loadImage("img/heromle1.png");
    // // hl2 = loadImage("img/heromle2.png");
    // // hl3 = loadImage("img/heromle3.png");
    // // hl4 = loadImage("img/heromle4.png");

    herorightrun = loadAnimation("img/herom1.png",
    "img/herom2.png",
    "img/herom3.png",
    "img/herom4.png");

    heroleftrun = loadAnimation("img/heromle1.png",
    "img/heromle2.png",
    "img/heromle3.png",
    "img/heromle4.png");

    herouprun = loadAnimation("img/herom1.png","img/herom4.png");

    herodownrun = loadAnimation("img/herom1.png","img/herom4.png");

    joyimg = loadImage("img/joystick.png");

    joymoimg = loadImage("img/joymove.png");

}

function setup() {
    canvas = createCanvas(1500,730);

    hero = createSprite(185,600,20,20);
    hero.addAnimation("stable",hr1);
    hero.addAnimation("rightrun",herorightrun);
    hero.addAnimation("stable2",hr2);
    hero.addAnimation("leftrun",heroleftrun);
    hero.addAnimation("uprun",herouprun);
    hero.addAnimation("downrun",herodownrun);
    hero.scale = 0.7;

    key = createSprite(1300,380,20,20);
    key.addImage(keyimg);
    key.scale = 0.1;

    friend = createSprite(1250,80,20,20);
    friend.addImage(fimg);
    friend.scale = 0.1

    joystick = createSprite(105,660,0,0);
    joystick.addImage(joyimg);
    joystick.scale = 0.2;
    
    joymo = createSprite(105,660,20,20);
    joymo.addImage(joymoimg);
    joymo.scale = 0.15;

    wallGroup = new Group();
    boxGroup = new Group();

    wall1 = createSprite(18,80,22,160);
    wall2 = createSprite(17,325,22,167);
    wall3 = createSprite(75,400,122,20);
    wall4 = createSprite(297,400,102,20);
    wall5 = createSprite(358,510,22,400);
    wall6 = createSprite(410,720,125,22);
    wall7 = createSprite(1100,720,800,22);
    wall8 = createSprite(927,670,25,80);
    wall9 = createSprite(928,400,25,340);
    wall10 = createSprite(748,241,350,22);
    wall11 = createSprite(1492,670,18,80);
    wall12 = createSprite(1220,320,560,20);
    wall13 = createSprite(1492,450,20,250);
    wall14 = createSprite(1384,160,26,300);
    wall15 = createSprite(813,50,22,80);
    
    //bhinnt
    wall16 = createSprite(813,195,22,82);

    wall17 = createSprite(473,5,930,12);
    wall18 = createSprite(1215,5,370,12);    
    wall19 = createSprite(358,201,23,97);    
    wall20 = createSprite(358,50,23,80);    
    wall21 = createSprite(585,290,25,82);    
    wall22 = createSprite(585,440,25,100);    
    wall23 = createSprite(655,480,115,20);    
    wall24 = createSprite(858,480,115,20);    
    wall25 = createSprite(985,560,115,20);    
    wall26 = createSprite(1218,560,125,20);    

    //hiderobberofbgimg
    wall27 = createSprite(130,160,45,45); 
    wall27.addImage(hide2);   
    wall27.scale = 0.8;

    //hidepoliceofbgimg
    wall28 = createSprite(650,175,45,45);
    wall28.addImage(hide1);

    invill1 = createSprite(760,650,50,50);
    invill1.visible = false;
    invill2 = createSprite(430,650,50,50);
    invill2.visible = false;
    invill3 = createSprite(500,35,50,50);
    invill3.visible = false;
    invill4 = createSprite(720,155,50,50);
    invill4.visible = false;
    invill5 = createSprite(400,205,50,50);
    invill5.visible = false;



    // hero.setCollider("rectangle",0,0,hero.width,hero.height);
    // hero.debug = true;

    police1 = createSprite(120,200,20,20);
    police1.addImage(police1img);
    police1.scale = 0.3;
    police2 = createSprite(740,375,20,20);
    police2.addImage(police1img);
    police2.scale = 0.3;
    police2.velocityY = 5;
    police3 = createSprite(1200,515,20,20);
    police3.addImage(police1img);
    police3.scale = 0.3;
    police3.velocityX = -5
    police4 = createSprite(1315,180,20,20);
    police4.addImage(police1img);
    police4.scale = 0.3;
    police4.velocityX = -5;

    st = 1;

}

function draw() {
    background(bg);
    movement();


    textSize(30);
    text(mouseX+","+mouseY,mouseX,mouseY);

    police4.bounceOff(wall16);
    police4.bounceOff(wall14);
    police3.bounceOff(wall9);
    police3.bounceOff(wall13)

    police2bot() 

    // if (police2.isTouching(invill3)) {
    //     police2botre()
    // }


    drawSprites();
}

function movement() {
    if (keyDown("right")) {
        hero.changeAnimation("rightrun",herorightrun);
        joymo.x = 125;
        hero.x = hero.x+4;
    }

    if (keyWentUp("right")) {
        hero.changeAnimation("stable",hr1);
    }

    if (keyDown("left")) {
        hero.changeAnimation("leftrun",heroleftrun);
        joymo.x = 85;
        hero.x = hero.x-4;
    }

    if (keyWentUp("left")) {
        hero.changeAnimation("stable2",hr2);
    }

    if (keyDown("up")) {
        hero.changeAnimation("uprun",heroleftrun);
        joymo.x = 105;
        joymo.y = 645;
        hero.y= hero.y-4;
    }

    if (keyWentUp("up")) {
        hero.changeAnimation("stable",hr1);
    }

    if (keyDown("down")) {
        hero.changeAnimation("downrun",herodownrun);
        joymo.x = 105;
        joymo.y = 675;
        hero.y= hero.y+4;
    }

    if (keyWentUp("down")) {
        hero.changeAnimation("stable",hr1);
    }
    // console.log(joymo.x,joymo.y);

    st = st+1;

}

function police2bot() {
    if (police2.isTouching(invill1)) {
        police2.setVelocity(-4,0);
    }
    if (police2.isTouching(invill2)) {
        police2.setVelocity(0.2,-4);
    }
    if (police2.isTouching(invill3)) {
        police2.setVelocity(4,0);
    }
    if (police2.isTouching(invill4)) {
        police2.setVelocity(-4,2);
        // police2botre();
    }
    if (police2.isTouching(invill5)) {
        police2.setVelocity(0,4);
    }
}

//  function police2botre() {
//      if (police2.isTouching(invill3)) {
//          police2.setVelocity(0,4);
//      }
//      if (police2.isTouching(invill2)) {
//          police2.setVelocity(4,0);
//      }  
//      if (police2.isTouching(invill1)) {
//          police2.setVelocity(-4,0);
//          police2bot();
//      } 
//  }

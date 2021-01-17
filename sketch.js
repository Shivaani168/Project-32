const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var options;
var score=0;
var backgroundImg;
//var bg=loadImage("light.jpg")

function preload(){	
polygonImage=loadImage("polygon.png");
winImage=loadImage("You win.jpg");
//lightImage=loadImage("light.jpg");
//darkImage=loadImage=("dark.jpg");
getBackground();
}

function setup() {
	createCanvas(1800, 800);

	engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(200,500,35,35)
    World.add(world,polygon)

    ground1=new Ground(width/2,height-10,1800,20)
    ground2=new Ground(width-1100,height-200,500,20)
    ground3=new Ground(width-400,height-400,500,20)
    connection=new Link(this.polygon,{x:200,y:500})

    box1=new Box(width-580,height-450,60,80)
    box2=new Box(width-520,height-450,60,80)
    box3=new Box(width-460,height-450,60,80)
    box4=new Box(width-400,height-450,60,80)
    box5=new Box(width-340,height-450,60,80)
    box6=new Box(width-280,height-450,60,80)
    box7=new Box(width-220,height-450,60,80)

    //level2
    box8=new Box(width-520,height-530,60,80)
    box9=new Box(width-460,height-530,60,80)
    box10=new Box(width-400,height-530,60,80)
    box11=new Box(width-340,height-530,60,80)
    box12=new Box(width-280,height-530,60,80)

    //level3
    box13=new Box(width-460,height-610,60,80)
    box14=new Box(width-400,height-610,60,80)
    box15=new Box(width-340,height-610,60,80)

    //level4
    box16=new Box(width-400,height-690,60,80)

    //level1
    box17=new Box(width-1280,height-250,60,80)
    box18=new Box(width-1220,height-250,60,80)
    box19=new Box(width-1160,height-250,60,80)
    box20=new Box(width-1100,height-250,60,80)
    box21=new Box(width-1040,height-250,60,80)
    box22=new Box(width-980,height-250,60,80)
    box23=new Box(width-920,height-250,60,80)

    //level2
    box24=new Box(width-1220,height-330,60,80)
    box25=new Box(width-1160,height-330,60,80)
    box26=new Box(width-1100,height-330,60,80)
    box27=new Box(width-1040,height-330,60,80)
    box28=new Box(width-980,height-330,60,80)

    //level3
    box29=new Box(width-1160,height-410,60,80)
    box30=new Box(width-1100,height-410,60,80)
    box31=new Box(width-1040,height-410,60,80)

    //level4
    box32=new Box(width-1100,height-490,60,80)

	Engine.run(engine);
}

function draw() {
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine)
	rectMode(CENTER);
    fill("red")
    textSize(30)
    text("Drag the hexagon,aim at the boxes and release the mouse to throw the hexagon at the boxes.",width-1550,height-750)
    text("Press Space to try again",width-1550,height-720)
    text("Score: "+score,1600,40)
    if(score>=155){
    background(winImage)
    ground1.destroy();
    ground2.destroy();
    ground3.destroy();
    }

    ground1.display();
    ground2.display();
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    //level2
    fill("orange")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    //level3
    fill("pink")
    box13.display();
    box14.display();
    box15.display();

    //level4
    fill("red")
    box16.display();

    //level1
    fill("lightblue")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();

    //level2
    fill("purple")
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    
    //level3
    fill("blue")
    box29.display();
    box30.display();
    box31.display();

    //level4
    fill("green")
    box32.display();

    //displayScore
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box20.score();
    box31.score();

    connection.display();

    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y,100,100);

    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    connection.fly();
}

function detectCollision(polygon,Lbox){
	boxBodyPosition=Lbox.body.position;
	polygonBodyPosition=this.polygon.position;
	var distance=dist(polygonBodyPosition.x,polygonBodyPosition.y,boxBodyPosition.x,boxBodyPosition.y)
	if(distance<=Lbox.radius+polygon.radius){
	Matter.Body.setStatic(Lbox.body,false);
}
}

function keyPressed(){
if(keyCode===32){
	Matter.Body.setPosition(this.polygon,{x:120,y:610})
	connection.attach(this.polygon)
}
}

async function getBackground(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/singapore")

    var responseJSON=await response.json();

    var dateTime=responseJSON.datetime;

    var hour=dateTime.slice(11,13)
    console.log(hour)
   

    if (hour > 06 && hour < 18) { 
        bg = "light.jpg"
        console.log("Hello")
     } 
        else { 
        bg= "dark.jpg"
        } 
        backgroundImg=loadImage(bg)
     }
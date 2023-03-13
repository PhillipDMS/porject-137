img="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("black");
    text("dog",45,75);
    noFill();
    stroke("blue");
    rect(45,80,450,350);
    fill("red");
    text("cat",350,75);
    noFill();
    stroke("blue");
    rect(300,80,300,350);
    fill("pink");
    text("bowl",300,320);
    noFill();
    stroke("blue");
    rect(280,330,120,120);
    

    
}
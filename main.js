img = "";
status = "";
objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting object";
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);

    fill("red");
    text("cat",320,120);
    noFill();
    stroke("red");
    rect(300,90,270,320);
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);

    }else{
        console.log(results);
        objects = results;
    }
}

if(status != ""){

for(i = 0; i<objects.length; i++){
    document.getElementById("status").innerHTML = "Status : Object Detected";

    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(object[i].label + " " + percent + "%",objects[i].x + 15,objects[i].y + 15);
    noFill();
    stroke("#FF0000");
        rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height);
}
}
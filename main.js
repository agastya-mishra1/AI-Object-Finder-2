status1="";
objects=[];

function preload(){

}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTMl="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Cocossd is Initialized");
    status1=true;
}

function draw(){
    image(video,0,0,480,380);
}

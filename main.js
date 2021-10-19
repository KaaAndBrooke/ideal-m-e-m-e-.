img = "";
status = "";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    cacae=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status-detectingObjects";

}
function draw(){
    image(img, 0, 0, 640, 420);
    textSize(20);
    fill("#ff0000");
    text("dog", 45, 75);
    text("cat", 300, 100);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);
}
function modelLoaded(){
    status = true
    cacae.detect(img, gotResult);
}
function gotResult(e, r){
    if (e){
        console.error(e, "haha yeeeeeeee error :)");
    
    }
    else {
        console.log(r, "yay ur project works");
    }
}
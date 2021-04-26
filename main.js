noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0 ;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    x = ml5.poseNet(video,ModelLoaded);
    x.on('pose',gotPoses);
}
function ModelLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX value is"+noseX+"NoseY value is"+noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("RigthWristX value is"+rightWristX+"Left wrist x value is"+leftWristX);
        difference = floor(leftWristX-rightWristX);
    }
}
function draw(){
    background('#696969');
    document.getElementById("s").innerHTML = "Width and the height of the square will be - "+difference+"Px";
    fill('#9966ff');
    stroke('#9966ff');
    square(noseX,noseY,difference);
}
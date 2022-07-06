peterpansong = "peterpan.mp3";
harrypottersong = "harrypotter.mp3";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    peterpansong = loadSound("peterpan.mp3");
    harrypottersong = loadSound("harrypotter.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("posenet model has been loaded yay")

}

function draw() {
    image(video,0,0,600,500);

}


function gotPoses(results) {
    if(results.length >0) {

        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
         console.log("LeftWristX position is: " + leftWristX + "and left wrist Y position is: " + leftWristY );


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
         console.log("RightWristX position is: " + rightWristX + "and right wrist Y position is: " + rightWristY );




    }
}


//done 
//lambo
//ferrari
//bugatti
//aston martin
//mclaren
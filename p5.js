noseX=0
noseY=0
function preload(){
nose = loadImage('https://i.postimg.cc/brHyD71z/mustache-transparent-mustache-cut-out-11563114756a2b9j58yag-removebg-preview.png');
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw(){
image(video, 0, 0, 300, 300);

image(nose, noseX-40, noseY-20, 80, 80)
}
function take_snapshot(){
    save('myfilter.png')
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y
        console.log(results)
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
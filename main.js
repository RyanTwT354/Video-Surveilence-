status = "";

function preload() {
  video = createVideo('video.mp4');
}

function setup() {
  create = createCanvas(500, 400);
  canvas.center();
  video.hide();
}

function Start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded)
  
}

function modelLoaded() {
  console.log("modelLoaded");
  status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}


function draw() {
  image(video, 0, 0, 500, 400);
}

function preload() {
  video = createVideo('video.mp4');
}

function setup() {
  create = createCanvas(500, 400);
  canvas.center();
  video.hide();
}

function start();

function draw() {
  image(video, 0, 0, 500, 400);
}

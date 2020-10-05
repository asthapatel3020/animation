//import Stats from "stats.js";
//import Proton from "proton-engine";
//import RAFManager from "raf-manager";
//import "./styles.css";

let stats;
let canvas;
let context;
let proton;
let renderer;
let emitter;

main();

function main() {
  initCanvas();
  initStats();
  createProton();
  // setTimeout(function () {
  //   proton.stopEmit();
  // createImageEmitter();
  //   // renderer = new Proton.CanvasRenderer(canvas);
  //   // // renderer = new Proton.DomRenderer(canvas);
  //   // renderer.transform3d = true;
  //   // proton.addRenderer(renderer);
  //   proton.destroy()
  // proton.removeEmitter(emitter);
  // }, 2000);
  // createImageEmitter();
  renderer = new Proton.CanvasRenderer(canvas);
  // renderer = new Proton.DomRenderer(canvas);
  // renderer.transform3d = true;

  proton.addRenderer(renderer);
  // proton.addEventListener(Proton.PARTICLE_DEAD, (particle) => {
  // console.log("finish");

  // emitter
  // createImageEmitter();
  // renderer = new Proton.CanvasRenderer(canvas);
  // renderer = new Proton.DomRenderer(canvas);
  // renderer.transform3d = true;
  // proton.addRenderer(renderer);
  // });
  render();
}

function initCanvas() {
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // canvas.width = 1003;
  // canvas.height = 610;
  // canvas
  // canvas.fadeIn('fast').delay(1000).fadeOut('fast');
  context = canvas.getContext("2d");
  var imgPath =
    "http://139.59.85.161/~glocoboostcom/wp-content/uploads/2020/08/home-img.png";

  //Create a new Image object.
  var imgObj = new Image();

  //Set the src of this Image object.
  imgObj.src = imgPath;

  //the x coordinates
  var x = 0;

  //the y coordinates
  var y = 0;

  //When our image has loaded.
  // imgObj.onload = function () {
  //Draw the image onto the canvas.

  // context.drawImage(imgObj, x, y);
  // };
  setTimeout(function () {
    // proton.stopEmit();
    // var img = document.getElementById("myImg");
    // context.drawImage(img, -100, -100);
    console.log("tiem");
  }, 3500);
  var img = document.getElementById("myImg");
  // img.style.display = "none";
  window.onpageshow = function (e) {
    img.style.display = "block";
  };
  window.onresize = function (e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // emitter.p.x = canvas.width / 2;
    // emitter.p.y = canvas.height / 2;
  };
}

function initStats() {
  stats = new Stats();
  stats.setMode(2);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
}

function createProton() {
  proton = new Proton();
  emitter = new Proton.Emitter();
  emitter.rate = new Proton.Rate(
    new Proton.Span(20, 50),
    new Proton.Span(0.1, 0.5)
  );
  emitter.addInitialize(new Proton.Mass(0.5));
  emitter.addInitialize(new Proton.Life(6, 10));
  emitter.addInitialize(
    new Proton.Body([
      "http://139.59.85.161/~glocoboostcom/jellybeans/Jellybeans-01.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/Jellybeans-02.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/Jellybeans-03.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/Jellybeans-04.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/Jellybeans-05.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/Jellybeans-06.png"
    ])
  );
  emitter.addInitialize(new Proton.Radius(80));
  emitter.addInitialize(
    new Proton.V(new Proton.Span(0.01, 8), new Proton.Span(0.01, 360), "polar")
  );

  emitter.addBehaviour(new Proton.Alpha(1.5, 0.5));
  emitter.addBehaviour(new Proton.Scale(1, 5));
  emitter.addBehaviour(new Proton.Gravity(0.3));
  emitter.addBehaviour(
    new Proton.Rotate(new Proton.Span(0.5, 360), new Proton.Span(-1, 10), "add")
  );
  emitter.addBehaviour(
    new Proton.CrossZone(
      new Proton.RectZone(0, 0, canvas.width, canvas.height),
      "dead"
    )
  );
  emitter.addBehaviour(
    new Proton.Scale(Proton.getSpan(0.09, 0.08), Proton.getSpan(0.1, 0.05))
  );

  emitter.p.x = canvas.width / 2;
  emitter.p.y = canvas.height / 2;
  emitter.emit(5);
  // emitter.emit();
  proton.addEmitter(emitter);
  // proton.addEmitter(emitter);
  // renderer = new Proton.CanvasRenderer(canvas);
  // // renderer = new Proton.DomRenderer(canvas);
  // // renderer.transform3d = true;
  // proton.addRenderer(renderer);
  // proton.addRenderer(renderer);
  // proton.addEventListener(Proton.PARTICLE_DEAD, (particle) => {
  //   console.log("finish");
  // });
}
function createImageEmitter() {
  proton = new Proton();
  emitter = new Proton.Emitter();
  // emitter.rate = new Proton.Rate(new Proton.Span(72, 77), new Proton.Span(.2, .5));
  emitter.rate = new Proton.Rate(
    new Proton.Span(1, 1),
    new Proton.Span(0.2, 0.5)
  );
  emitter.addInitialize(new Proton.Mass(1));
  // emitter.addInitialize(new Proton.Body(['http://139.59.85.161/~wordpresspractes/wp-content/themes/twentytwenty/image/Jellybeans-01.png', 'http://139.59.85.161/~wordpresspractes/wp-content/themes/twentytwenty/image/Jellybeans-02.png', 'http://139.59.85.161/~wordpresspractes/wp-content/themes/twentytwenty/image/Jellybeans-03.png', 'http://139.59.85.161/~wordpresspractes/wp-content/themes/twentytwenty/image/Jellybeans-04.png', 'http://139.59.85.161/~wordpresspractes/wp-content/themes/twentytwenty/image/Jellybeans-05.png', 'http://139.59.85.161/~wordpresspractes/wp-content/themes/twentytwenty/image/Jellybeans-06.png'], 100, 100));
  emitter.addInitialize(
    new Proton.Body([
      "http://139.59.85.161/~glocoboostcom/jellybeans/3Pack-animation.png"
    ])
  );
  emitter.addInitialize(new Proton.Radius(40));
  emitter.addInitialize(new Proton.Life(10, 15));
  emitter.addInitialize(
    new Proton.Velocity(
      new Proton.Span(1, 2),
      new Proton.Span(0, 360, true),
      "polar"
    )
  ); 

  // forceBehaviour = new Proton.Force(0, 0);
  emitter.addBehaviour(new Proton.Alpha(1, 0));
  // emitter.addBehaviour(new Proton.Scale(.7, 0));
  // emitter.addBehaviour(new Proton.Rotate(new Proton.Span(0, 2)));
  // emitter.addBehaviour(new Proton.Gravity(5.5));
  // emitter.addBehaviour(new Proton.CrossZone(new Proton.RectZone(0, 0, canvas.width, canvas.height), 'dead'));
  // emitter.addBehaviour(new Proton.Force(0, 0), new Proton.Gravity(0.9));
  // emitter.addBehaviour(new Proton.RandomDrift(10, 10, 0.05));
  // emitter.addBehaviour(
  //   new Proton.CrossZone(
  //     new Proton.RectZone(-50, -50, canvas.width + 80, canvas.height + 80),
  //     "dead"
  //   )
  // );

  // emitter.addBehaviour(
  //   new Proton.Scale(Proton.getSpan(0.3, 0.6), Proton.getSpan(0.5, 0.6))
  // );

  emitter.p.x = canvas.width / 2;
  emitter.p.y = canvas.height / 2;
  emitter.emit("once", true);
  console.log(emitter);
  proton.addEmitter(emitter);
  // renderer = new Proton.CanvasRenderer(canvas);
  // // renderer = new Proton.DomRenderer(canvas);
  // // renderer.transform3d = true;
  // proton.addRenderer(renderer);
  // proton.addRenderer(renderer);
}
function render() {
  RAFManager.add(() => {
    stats.begin();
    // emitter.rotation += 1.5;
    proton.update();
    stats.end();
  });

  // setTimeout(function () {

  // proton.destroy();
  // }, 3000);
}

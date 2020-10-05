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
  var imgPath = "";
 // var imgPath = "http://139.59.85.161/~glocoboostcom/wp-content/uploads/2020/08/home-img.png";

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
  // emitter.rate = new Proton.Rate(new Proton.Span(250, 300), 1);
  // subemitter.addInitialize(new Proton.Mass(1));
  //   subemitter.addInitialize(new Proton.Radius(1, 2));
  //   subemitter.addInitialize(new Proton.Life(1, 3));
  //   subemitter.addInitialize(
  //     new Proton.V(new Proton.Span(2, 4), new Proton.Span(0, 360), "polar")
  //   );

  //   subemitter.addBehaviour(new Proton.RandomDrift(10, 10, 0.05));
  //   subemitter.addBehaviour(new Proton.Alpha(1, 0));
  //   subemitter.addBehaviour(new Proton.Gravity(3));
  //   const color =
  //     Math.random() > 0.3 ? Proton.MathUtil.randomColor() : "random";
  //   subemitter.addBehaviour(new Proton.Color(color));

  //   subemitter.p.x = particle.p.x;
  //   subemitter.p.y = particle.p.y;
  //   subemitter.emit("once", true);
   emitter.rate = new Proton.Rate(
    new Proton.Span(150, 150),
    new Proton.Span(0.09, 0.5)
  );
  emitter.addInitialize(new Proton.Mass(0.5));
  emitter.addInitialize(new Proton.Radius(1, 2));
  emitter.addInitialize(new Proton.Life(1, 3));
  emitter.addInitialize(
    new Proton.Body([
      "http://139.59.85.161/~glocoboostcom/jellybeans/red.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/purple.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/pink.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/orange.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/green.png",
        "http://139.59.85.161/~glocoboostcom/jellybeans/black.png",
        "http://139.59.85.161/~glocoboostcom/jellybeans/yellow.png",
      "http://139.59.85.161/~glocoboostcom/jellybeans/blue.png"
    ])
  );
  emitter.addInitialize(
    new Proton.V(new Proton.Span(0.9, 8), new Proton.Span(0, 360), "polar")
  );
  emitter.addBehaviour(
    new Proton.Scale(Proton.getSpan(0.007, 0.001), Proton.getSpan(0.30, 0.20))
  );
  // emitter.addBehaviour(new Proton.RandomDrift(5, 2, 0.05));
  // emitter.addBehaviour(new Proton.Alpha(1.5, 0.5));
  // emitter.addBehaviour(new Proton.Scale(1, 0.1));
  // emitter.addBehaviour(new Proton.Gravity(0.3));
  emitter.addBehaviour(
    new Proton.Rotate(new Proton.Span(0, 180), new Proton.Span(-1, 4), "add")
  );
  // emitter.addInitialize(new Proton.V([1, 8], new Proton.Span(0, 360), "polar"));
  emitter.addBehaviour(
    new Proton.CrossZone(
      new Proton.RectZone(0, 0, canvas.width, canvas.height),
      "dead"
    )
  );
  // emitter.addBehaviour(
  //   new Proton.Rotate(new Proton.Span(1, 360), new Proton.Span(-1, 15), "add")
  // );
  // emitter.addBehaviour(
  //   new Proton.Scale(Proton.getSpan(0.5, 0.5), Proton.getSpan(0.5, 0.5))
  // );
  // emitter.addBehaviour(new Proton.Alpha(1, 0));
  // emitter.addBehaviour(new Proton.Scale(1, 0.1));
  // emitter.addBehaviour(
  //   new Proton.Scale(Proton.getSpan(0.19, 0.08), Proton.getSpan(0.1, 0.05))
  // );
  emitter.p.x = canvas.width / 2;
  emitter.p.y = canvas.height / 2;
  emitter.emit(3);
  proton.addEmitter(emitter);
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

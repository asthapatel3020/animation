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
  renderer = new Proton.CanvasRenderer(canvas);

  setTimeout(() => {
    proton.addRenderer(renderer);

}, 2000)

  render();
}

function initCanvas() {
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext("2d");
  var img = document.getElementById("myImg");
  // img.style.display = "none";
  window.onpageshow = function (e) {
    img.style.display = "block";
  };
  window.onresize = function (e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
    new Proton.Span(350, 350),
    0.2
  ); // 100 and 160 count of jelly beans comes out
  emitter.addInitialize(new Proton.Life(2, 2)); // see the life span of jelly beans comes out
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
    new Proton.V(
      new Proton.Span(1, 22),  // animation speed
      new Proton.Span(0.001, 360, true),
      "polar"
    )
  );

  // emitter.addBehaviour(new Proton.Alpha(1, 0.5));
  // emitter.addBehaviour(new Proton.Scale(1, 0.5));
  emitter.addBehaviour(new Proton.Gravity(10.5));
  emitter.addBehaviour(
    new Proton.Rotate(new Proton.Span(0, 360), new Proton.Span(1, 1), "add")
  );
  emitter.addBehaviour(
    new Proton.CrossZone(
      new Proton.RectZone(0, 0, canvas.width, canvas.height),
      "dead"
    )
  );
  // emitter.addInitialize(
  //   new Proton.Velocity(
  //     new Proton.Span(0.5, 5),
  //     Proton.getSpan(0, 360, true),
  //     "polar"
  //   )
  // );
  emitter.addBehaviour(
    new Proton.Scale(Proton.getSpan(0.09, 0.1), Proton.getSpan(0.5, 0.5))
  ); // scalling is use to resize the jelly beans

  // emitter.addBehaviour(new Proton.RandomDrift(6, 10, 0.05));
  // emitter.addBehaviour(new Proton.Alpha(1.5, 0.75));
  // // emitter.addBehaviour(new Proton.Scale(1, 0.1));

  // // emitter.addBehaviour(
  // //   new Proton.Rotate(new Proton.Span(0, 180), new Proton.Span(1, 4), "add")
  // // ); //rotate every singel jelly beans

  // emitter.addBehaviour(
  //   new Proton.Rotate(new Proton.Span(0, 360), new Proton.Span(1, 4), "add")
  // );
  // // emitter.addBehaviour(new Proton.Gravity(1));

  // emitter.addBehaviour(
  //   new Proton.CrossZone(
  //     new Proton.RectZone(0, 0, canvas.width, canvas.height),
  //     "dead"
  //   )
  // );
  emitter.p.x = canvas.width / 2;
  emitter.p.y = canvas.height / 2 + 90;
  emitter.emit(2.8);
  proton.addEmitter(emitter);
}

function render() {
  RAFManager.add(() => {
    stats.begin();
    emitter.rotation += 1.1;
    proton.update();
    stats.end();
  });
}


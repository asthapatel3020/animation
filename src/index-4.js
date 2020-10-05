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

  proton.addRenderer(renderer);

  render();
}

function initCanvas() {
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext("2d");

  setTimeout(function () {
    // proton.stopEmit();
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
  };
}

function initStats() {
  stats = new Stats();
  stats.setMode(1);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
}

function createProton() {
  proton = new Proton();
  emitter = new Proton.Emitter();
  // Proton . Rate ( Proton . GetSpan ( 10 ,  20 ),  0.1 ); 
  emitter.rate = new Proton.Rate(
    new Proton.Span(95, 170),
    0.1
  ); // 100 and 160 count of jelly beans comes out
 
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
      2,
      new Proton.Span(0.5, 360),'p'
    )
  );
  emitter.addInitialize(new Proton.Life(9.5 ,9.5)); // see the life span of jelly beans comes out
  emitter.addInitialize(
    new Proton.V(
      new Proton.Span(0.9, 8),
      new Proton.Span(0.5, 100, true),
      "polar"
    )
  );
  emitter.addBehaviour(new Proton.Alpha(1));
  emitter.addBehaviour(new Proton.Scale(6, 0.5));
  emitter.addBehaviour(new Proton.Gravity(1.4));
  emitter.addBehaviour(
    new Proton.Rotate(new Proton.Span(0, 90), new Proton.Span(1.5, 6), "add")
  );
  
  emitter.addBehaviour(
    new Proton.Scale(Proton.getSpan(0.007, 0.001), Proton.getSpan(1.2, 1.2))
  ); 
  emitter.p.x = canvas.width / 2;
  emitter.p.y = canvas.height / 2 + 70;
  emitter.emit(0.4);
  proton.addEmitter(emitter);
}

function render() {
  RAFManager.add(() => {
    stats.begin();
    proton.update();
    stats.end();
  });
}


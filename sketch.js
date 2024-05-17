let video;
let objectDetector;

console.log('Versão atual', ml5.version);

function preload(){
  
  objectDetector = ml5.objectDetector('cocossd');
}


function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(400, 400)
  video.hide();
  
  objectDetector.detect(video, obterResultados);
}

function obterResultados(error, resultados){
  if(error){
    console.error(error);
  }
  
  for(let i = 0; i < resultados.length; i++){
   let objeto = resultados[i];
   stroke(0,255,0);
   strokeWeight(4);
   noFill();
   textSize(20);
   rect(objeto.x, objeto.y, objeto.width, objeto.height);
   stroke(0);
   strokeWeight(2);
   textSize(20);
   text(objeto.label, objeto.x + 10, objeto.y +20);
  }
  objectDetector.detect(video, obterResultados);
}
function draw(){
  image(video, 0, 0);
}
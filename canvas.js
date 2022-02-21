let pantalla = document.querySelector("#ahorcado");
pantalla.scrollIntoView({block:"end",behavior:"smooth"});
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "Cornsilk";
//pincel.fillRect(0, 0, 1200 ,800);
pincel.lineWidth = 12;
pincel.strokeStyle = "SaddleBrown";
//pincel.lineWidth = 18;


function base(){

  let miImage = new Image();
  miImage.src = 'img/baseAh.png';
  miImage.onload = function(){
  pincel.drawImage(miImage,65,210,width="200",heigth="150");
    }
  lineas(198, 210, 198, 100);
  lineas(192, 100, 350, 100);
  lineas(350, 94, 350, 150);
}

function lineas(iniX, iniY, finX, finY) {
  pincel.beginPath();
  pincel.moveTo(iniX, iniY);
  pincel.lineTo(finX, finY);
  pincel.stroke();
}

function head(inicioX, inicioY, radio) {
  pincel.beginPath();
  pincel.arc(inicioX, inicioY ,radio, 0 ,2*Math.PI);
  pincel.stroke();
}

function drawBody() {
  
  lineas(350, 200, 350, 300); //cuerpo
  
}

function brazos(){

  lineas(350, 220, 400, 260); //brazo derecho
  lineas(350, 220, 300, 260); //brazo izquierdo
  
}

function piernas(){

  lineas(350, 300, 400, 320); //pie derecho
  lineas(350, 300, 300, 320); //pie izquierdo
}

function dibujarOjos(){

  pincel.lineWidth = 4;
  pincel.strokeStyle = "red"
  lineas(360,160,370,170); 
  //lineas(360,180,370,190); 
  
  lineas(340,160,330,170); 
  //lineas(320,140,360,185); 
  
}

function getCursorPosition(pantalla, event) {
  let rect = pantalla.getBoundingClientRect()
  let x = event.clientX - rect.left
  let y = event.clientY - rect.top
  console.log(`x: ${x}  y: ${y}`)
}

pantalla.addEventListener('mousedown', function(e) {
  getCursorPosition(pantalla, e)
})













// general de variables
let vidas = 5;
let letRepetida = [];
let letra;
let word ;
let letError = [];

//---------------palabra ingresada 
let newPalabra = document.getElementById("nueva-palabra");
newPalabra.addEventListener("click",validacion);

function validacion(){
    let nPalabra = document.getElementById("input-nueva-palabra").value.toUpperCase();
    let patrLetras = /^[A-Z]+$/g

    if (patrLetras.test(nPalabra)){
        words.push(nPalabra)
        console.log(words);
        swal ("agregado")
    }else{
        swal({
            text:"solo letras",
            icon:"error",
            buttons:false,
        })
    }
    document.getElementById("input-nueva-palabra").value = ""
    document.getElementById("input-nueva-palabra").focus()
}
//______________________


// array palabras secretas & random & guiones // 
let words = ["LINCE","LEOPARDO","LEON","TIGRE","GATO","FELINO","JAGUAR","PUMA","MONTES","PANTERA","TIGRILLO"];
word = words[Math.floor(Math.random()*words.length)];
let wordGuion = word.replace(/./g,"_ ");

//cerrar canvas
document.getElementById("ahorcado").style.display = "none";
//cerrar boton reinicio
document.getElementById("reiniciar").style.display= "none";


// click boton de iniciar juego
let jugar = document.getElementById("iniciar-juego")
jugar.addEventListener("click", function(){
// muestro el juego
document.getElementById("areaJuego").style.display = "flex";  
//muestro el canvas
document.getElementById("ahorcado").style.display = "block";
// palabra seleccionada con guiones
document.getElementById("palabraSecreta").innerHTML = wordGuion
document.getElementById("tituloLetras").innerHTML = "LETRAS EQUIVOCADAS";
document.getElementById("enterLetter").innerHTML = "Ingrese letra";
// cantidad de vidas
document.getElementById("vida").innerHTML = "VIDAS TOTALES SON :  " + vidas; 
  //llama a la funcion de dibujar la base del ahorcado
base();

window.addEventListener("keydown",ingresarLetra);
  
})

function ingresarLetra(e){
    console.log(e)
    document.getElementById("enterLetter").style.display = "none";
    
    var letra = "";
    var tecla = e.keyCode || e.which;
    console.log(tecla)
    if ((tecla >=65 && tecla <=90)){
        letra = e.key.toUpperCase()
        comprobarLetra1(letra);
    }else{

    alert("Ingrese Solo Letras");
    
    }

    
    console.log(letra);
}

console.log(word);

function comprobarLetra1(letra){

    console.log(letra);
    console.log(word);
    var  nueva = "";
    var errar = true;

    for(i=0; i<word.length; i++){
        if(letra == word[i]){
            nueva = nueva + letra + " ";
            console.log(nueva);
            errar = false;
        }else{
           
           nueva = nueva + wordGuion[i*2] + " ";
           console.log(nueva)
     }     

}
console.log(errar)

if(errar){
    console.log(errar)
    var estado = comprobarLetra(letra);
    if(estado){
        vidas -= 1            
    }
    if(vidas == 4){

        head(350,170,25);
    }
    if(vidas == 3){
        drawBody()
    }
    if(vidas == 2){
        brazos()
    }
    if(vidas == 1){
        piernas()
        
    }

    if(vidas == 0){

        dibujarOjos()
        document.getElementById("perdedor").innerHTML = "FIN JUEGO! - era : " + word
        document.getElementById("reiniciar").style.display="block";
        window.removeEventListener("keydown", ingresarLetra);

    }
    
    document.getElementById("vida").innerHTML = "VIDAS TOTALES SON :  " + vidas;      
}
    wordGuion = nueva;
    document.getElementById("palabraSecreta").innerHTML = wordGuion;
    console.log(wordGuion)

    if(wordGuion.search("_") === -1){

        document.getElementById("ganador").innerHTML = "GANASTE"
        document.getElementById("reiniciar").style.display="block";
        window.removeEventListener("keydown", ingresarLetra);
        
    }

}

function comprobarLetra(valor){
    letra = valor
    var agregar = false;
    if(!letError.includes(letra)){
        letError.push(letra)
        document.getElementById("letrasError").innerHTML = letError;
        agregar = true
      
    }else{
        letRepetida.push(letra)
        swal ({
            title:"utilizada ya  "+ letra     
        })
    }
    return agregar
}
   



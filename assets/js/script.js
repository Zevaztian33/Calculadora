var operandoA;
var operandoB;
var operacion;

function init(){
    //Variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var menos = document.getElementById('menos');
    var por = document.getElementById('por');
    var dividido = document.getElementById('dividido');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos
    uno.onclick = function(event){
        resultado.textContent =resultado.textContent + "1"
    }
    dos.onclick = function(event){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(event){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(event){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(event){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(event){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(event){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(event){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(event){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(event){
        resultado.textContent = resultado.textContent  + "0";
    }
    reset.onclick = function(event){
        resetear();
    }
    suma.onclick = function(event){
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    menos.onclick = function(event){
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    por.onclick = function(event){
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    dividido.onclick = function(event){
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(event){
        operandoB = resultado.textContent;
        resolver();
    }
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoA) + parseFloat(operandoB);
        break;
      case "-":
          res = parseFloat(operandoA) - parseFloat(operandoB);
          break;
      case "*":
        res = parseFloat(operandoA) * parseFloat(operandoB);
        break;
      case "/":
        res = parseFloat(operandoA) / parseFloat(operandoB);
        break;
    }
    resetear();
    resultado.textContent = res;
}
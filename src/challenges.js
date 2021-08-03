// Desafio 1
function compareTrue(parametro1, parametro2) {
  if(parametro1 && parametro2 === true){
    return true;
  } else if(parametro1 && parametro2 === false){
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
let resultado = 0
resultado = (base * height) / 2
return resultado;
}

// Desafio 3
function splitSentence(string) {
  resultado = []
  resultado = string.split(" ")
  return resultado;
}

// Desafio 4
function concatName(array) {
  let indexCont  = 0
  let ultimaArray = []
  let primeiraArray = array[0]
  let resultado = ""
  for(index = 0; index < array.length; index+=1) {
    if (index > indexCont){
      indexCont = index;
      ultimaArray = array[indexCont];
    }
  }
  resultado = ultimaArray + "," + " " + primeiraArray;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
pontosVitoria = wins * 3;
pontosEmpate = ties * 1;
resultado = pontosVitoria + pontosEmpate;
return resultado;
}

// Desafio 6
function highestCount(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

for(index = 0; index < numeros.length; index+=1) {
  let verificaNumero = numeros[index];
  for(index2 = 0; index2 < numeros.length; index2+=1) {
    if(verificaNumero === numeros[index2]) {
      contNumero = contNumero + 1;
    }
  }
  if (contNumero > contRepetido){
    contRepetido = contNumero;
    indexNumeroRepetido = index;
  }
  contNumero = 0;
}
return numeros[indexNumeroRepetido]
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let gato1 = "cat1"
let gato2 = "cat2"
let trombam = 'os gatos trombam e o rato foge'
  if(mouse - cat1 === mouse - cat2 + 2){
    return trombam;
  } else if (mouse + cat1 <  mouse + cat2) {
    return gato1
  } else {
    return gato2
  }
} 


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

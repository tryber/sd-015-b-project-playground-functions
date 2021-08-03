// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" "); 
}

// Desafio 4
function concatName(arrey) {
  let firstElement = arrey[0];
  let lastElement = arrey[arrey.length - 1];
  return lastElement + ', ' + firstElement;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3;
  let empate = 1;
  return (wins * vitorias) + (ties * empate);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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

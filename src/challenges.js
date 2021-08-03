// Desafio 1
function compareTrue(boolean1, boolean2) { 
  if(boolean1 === true && boolean2 === true){
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
   let resultado = (base * height)/2;
   return resultado; 
}
// Desafio 3
function splitSentence(string) {
    let novoArray = string.split([" "])
    return novoArray;
}
// Desafio 4
function concatName(string) {
    let primeiroObj = string.shift();
    let ultimoObj = string.pop();
    let uneTudo = ultimoObj + ', ' + primeiroObj;
    return uneTudo.concat()
}
// Desafio 5
function footballPoints(wins, ties) {
    let vitorias = wins * 3;
    let empates = ties;
    let pontos = vitorias + empates;
    return pontos + ' pontos'
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

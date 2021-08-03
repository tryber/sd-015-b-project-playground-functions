// Desafio 1
function compareTrue(compareValor1, compareValor2) {
  if ( compareValor1 && compareValor2 ) {
    return true;
  }
  else{
    return false;
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(stringRecebida) {
  let stringFeita = '';
  let resultado = [];
  for ( let letter of stringRecebida){
    if( letter != ' '){
      stringFeita = stringFeita + letter;
    }
    else{
      resultado.push(stringFeita);
      stringFeita = '';
    }
  }
  resultado.push(stringFeita);
  return resultado;
  // seu código aqui
}

// Desafio 4
function concatName(arrayStrings) {
  let resultado =  arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0]
  return resultado
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
  // seu código aqui
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

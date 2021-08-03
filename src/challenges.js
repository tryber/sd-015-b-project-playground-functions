// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
    else if (param1 === false && param2 === true) {
      return false; 
  }
    else {
      return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  if (height < 2){
    height = 0
    result = base /2;
  return result;
  }
  else {
    result = (base * height) /2;
    return result;
  }
}
console.log(calcArea(51, 1))

// Desafio 3
function splitSentence(sentence) {
  let array = sentence;
  return array.split(' ');
}
console.log(splitSentence("Vamo que vamo"));

// Desafio 4
function concatName(string) {
  let resultado = string;
  let pos1 = resultado[0];
  let pos2 = resultado.pop();
  return (pos1 + "," + pos2);
}
console.log(concatName(['lucas','cassiano','ferraz','paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let empate = 1;
  let jogosWin = victory * wins;
  let jogoTies = empate * ties;
  return jogosWin + jogoTies;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(maior) {
  let nMaior = maior[0];
  //Este trecho, peguei inspiração em alguns exercícios realizados anteriormente.
  for (let index = 1; index < maior.length; index += 1){
    if (maior[index] > nMaior){
      nMaior = maior[index];
    }
  }
  let quantidadeNMaior = 0;
  for (let index = 0; index < maior.length; index += 1){
    if (nMaior === maior[index]){
      quantidadeNMaior++
    }
  }
  return quantidadeNMaior;
}
console.log(highestCount([0,4,4,4,9,2,1]))

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

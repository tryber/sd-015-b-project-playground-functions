// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
  // Função .split foi encontrada buscando "how to split sentences in js?"
// e dentro da função '.split()' se coloca a condição para a separação, no caso, o espaço.
  }

// Desafio 4
function concatName(arrayStr) {
  lastItem = arrayStr[arrayStr.length - 1];
  firstItem = arrayStr[0];
  return (lastItem + ", " + firstItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3) + (ties*1));
}


// Desafio 6
function highestCount(arrayNum) {
  let highestNumber = "";
  let counter = [];
  //definindo maior numero
  for (let i = 0; i < arrayNum.length; i++){
    let number = arrayNum[i];
    
    if (number >= highestNumber) {
      highestNumber = number; 
    }
  }
  //contando maior numero
  for (let j = 0; j < arrayNum.length; j++){
    if ( highestNumber === arrayNum[j]){
      counter.push(highestNumber);
    }
  }
  return counter.length;
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

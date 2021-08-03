// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
    return true;
  } else {
    return false
  } 
}

// seu código aqui


// Desafio 2
function calcArea(base, height) {
  calcArea = ((base * height) / 2);
  return calcArea;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split (" ");
  return result
}

// Desafio 4
function concatName(array) {
  let concat = (array[array.length - 1]) +', ' + (array[0]);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  footballPoints = ((wins * 3) + (ties * 1));
  return footballPoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseDistanceCat1 = Math.abs(cat1 - mouse);
  let mouseDistanceCat2 = Math.abs(cat2 - mouse);
  if (mouseDistanceCat1 === mouseDistanceCat2) {
    return 'os gatos trombam e o rato foge';
  } if (mouseDistanceCat1 > mouseDistanceCat2) {
    return 'cat2';
  } return 'cat1';
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

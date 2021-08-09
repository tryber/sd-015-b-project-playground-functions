// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
function concatName(name) {
  let first = [0];
  let last = name.length - 1;
  return name [last] + ', ' + name[first];
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount (array) {
  let maiorNum = 0;
  let count = 0;
    for (i = 0; i < array.length; i += 1) {
  if (array[i] > maiorNum) {
      maiorNum = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNum) {
      count += 1;
    }
  }
  return count;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return 'cat1';
}
  else if ( mouse - cat1 > mouse - cat2) {
    return 'cat2';
}
  else {
    return ('os gatos trombam e o rato foge');
  }
}
catAndMouse(6, 3, 4);
catAndMouse(20, 14, 8);
catAndMouse(6, 3, 3);
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

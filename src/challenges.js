// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

compareTrue(false, true);
compareTrue(false, false);
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return (base* height)/2;
}

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(s) {
  return s.split(" ");
}

splitSentence("go trybe");
splitSentence("vamo que vamo");
splitSentence("foguete");

// Desafio 4
function concatName(nome) {
  let tamanho = nome.length;
  return `${nome[tamanho-1]}, ${nome[0]}`;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3)+(ties * 1));
}

footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount(v) {
  let maior = 0;
  let cont = 0;
  for (let i of v) {
    if(i > maior) {
      maior = i
    }
  }
  for (let j of v) {
    if (j === maior) {
      cont += 1;
    }
  }
  return cont;
}

highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);

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

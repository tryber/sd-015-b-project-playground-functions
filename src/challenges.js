// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == true && b == true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let worlds = frase.split(' ');
  return worlds;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(lista) {
  // seu código aqui
  let maior = 0;
  let repete = 0
  for (i = 0; i <= lista.length + 1; i ++){
    if (maior < lista[i]) {
      maior = lista[i];
    }
    else {
      maior = maior;
    }
  }
  for (i = 0; i <= lista.length + 1; i ++){
    if (maior == lista[i]) {
      repete ++;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((mouse - cat1) < (mouse - cat2)) {
    return 'cat1';
  }
  else if ((mouse - cat1) > (mouse - cat2)){
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
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

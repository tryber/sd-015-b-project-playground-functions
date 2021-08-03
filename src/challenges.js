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
function concatName(lista) {
  // seu código aqui
  return lista[lista.length -1] + " " + lista[0];
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
  let repete = 0;
  for (i = 0; i <= lista.length + 1; i ++){
    if (maior < lista[i]) {
      maior = lista[i];
    }
  }
  for (i = 0; i <= lista.length + 1; i ++){
    if (maior == lista[i]) {
    repete ++
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  if (distanciaGato1 < distanciaGato2) {
    return "cat1";
  }
  else if (distanciaGato2 < distanciaGato1) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }

}// Econtrei a funcao Math.abs no documento, estava procurando uma forma de "anular" o numero negativo e consegui por meio dela

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

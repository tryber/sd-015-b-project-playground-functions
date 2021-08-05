// Desafio 1
let value = false;
function compareTrue(n1, n2) {
  if (n1 && n2 === true) {
    value = true;
    return value;
  } else if (n1 && n2 !== true) {
    return value;
  }
  else 
 {
    value = false;
    return value;
  }
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let valor = base * height / 2;
  return valor;
}
console.log(calcArea(51, 1));
// Desafio 3
function splitSentence(frase) {
  frase = frase.split(' ');
  return frase;
  // seu código aqui
}
console.log(splitSentence('sempre é assim'));

// Desafio 4
function concatName(palavras) {
  for (let index = 0; index <= palavras.length; index += 1) {
    for (let contador = palavras.length - 1; contador >= 0; contador -= 1) {
      let firstStringLetter = palavras[index];
      let lastStringLetter = palavras[contador];
      return lastStringLetter + ', ' + firstStringLetter;
    }
  }  
}
console.log(concatName(['Axe', 'is', 'more', 'rules']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  return vitoria + empate;
}
console.log(footballPoints(14, 8))

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

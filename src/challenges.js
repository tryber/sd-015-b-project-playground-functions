// Desafio 1

function compareTrue(a, b) {
  // seu código aqui
  if (a === 'pensar' && b === 'logoExisto') {
    return true;
  } else {
    return false;
} 
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
frase = 'go trybe'
function splitSentence(frase) {
  // seu código aqui
  sentenca = frase.split(" ");
  return sentenca;
}

// Desafio 4
names = ['joão', 'paulo', 'daniel'];

function concatName(names) {
  // seu código aqui
  let primeiroItem =""
  for (let name in names) {
    primeiroItem = primeiroItem + names[name[0]];
    return(primeiroItem);    
  }
  let ultimoItem = ""
  for (let name in names) {
    let ultimoItem = ultimoItem + names[name[1]];
    return ultimoItem;
  }
  }

console.log(concatName(names));


// Desafio 5
function footballPoints() {
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

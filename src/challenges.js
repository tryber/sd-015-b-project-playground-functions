// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
    return true
  }
  else if (a === false && b === false ) {
    return false
  }
  else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let words = frase.split(' ')
  return words
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiraeultima = (array[array.length - 1]) + ', ' + array[0]
  return primeiraeultima

}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0
  for (let index = 0; index < wins; index += 1) {
    pontos += 3
  }
  for (let index = 0; index < ties; index += 1) {
    pontos += 1
  }
  return pontos
}

function maxOfArray(array) {
  return Math.max.apply(null, array)
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiornum = maxOfArray(array)
  let contagemmaiornum = 0
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiornum) {
      contagemmaiornum += 1
    }
  }
  return contagemmaiornum
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

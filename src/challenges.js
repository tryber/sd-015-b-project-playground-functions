// Desafio 1
function compareTrue(param1, param2) {
  return (param1 == true && param2 == true)
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(frase) {
  return (frase.split(" "))
}

// Desafio 4
function concatName(frase) {

  let first = frase[0]
  let last = frase[frase.length - 1]
  let b = last + ", " + first
  return b
}

// Desafio 5
function footballPoints(wins, ties) {
  let contadorDePontos = wins * 3 + ties

  return contadorDePontos
}

// Desafio 6
function highestCount(arrNumeros) {


  let maiorNumeroSalvo = arrNumeros[0]
  let contagem = 0

  for (let contadorHC = 0; contadorHC < arrNumeros.length; contadorHC += 1) {
    if (arrNumeros[contadorHC] > maiorNumeroSalvo) {
      maiorNumeroSalvo = arrNumeros[contadorHC]
    } else {
      maiorNumeroSalvo = maiorNumeroSalvo
    }
  }

  for (let contadorMNS = 0; contadorMNS < arrNumeros.length; contadorMNS += 1) {
    if (arrNumeros[contadorMNS] === maiorNumeroSalvo) {
      contagem += 1
    } else {
      contagem = contagem
    }
  }
  return contagem
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1)
  let dist2 = Math.abs(mouse - cat2)

  if (dist1 == dist2) {
    return "os gatos trombam e o rato foge"
  } else if (dist2 < dist1) {
    return "cat2"
  } else {
    return "cat1"
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

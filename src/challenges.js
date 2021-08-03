// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true
  } else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// Desafio 3
function splitSentence(string) {
  let a = string.split(' ')
  return a
}
// Desafio 4
function concatName(arrayString) {
  let a = arrayString.length - 1
  let b = arrayString[0]
  return `${arrayString[a]}, ${b}`
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numeros) {
  let a = Math.max.apply(null, numeros)
  let contador = 0;
  for (let i = 0; i <= numeros.length; i++) {
    if (a == numeros[i]) {
      contador++
    }
  }
  return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2, ) {
  let distanciaCat1 = Math.abs(cat1 - mouse)
  let distanciaCat2 = Math.abs(cat2 - mouse)
  if (distanciaCat1 < distanciaCat2) {
    return "cat1"
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(numeros) {
  let array = []
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      array.push('fizzBuzz')
    } else if (numeros[i] % 3 === 0) {
      array.push('fizz')
    } else if (numeros[i] % 5 === 0) {
      array.push('buzz')
    } else {
      array.push('bug!')
    }
  }
  return array
}
// Desafio 9
function encode(string) {
  let b = []
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
        b[i] = 1
        break;
      case 'e':
        b[i] = 2
        break;
      case 'i':
        b[i] = 3
        break;
      case 'o':
        b[i] = 4
        break;
      case 'u':
        b[i] = 5
        break;
      default:
        b[i] = string[i]
        break;
    }
  }
  return b.join('')
}

function decode(string) {
  let b = []
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '1':
        b[i] = 'a'
        break;
      case '2':
        b[i] = 'e'
        break;
      case '3':
        b[i] = 'i'
        break;
      case '4':
        b[i] = 'o'
        break;
      case '5':
        b[i] = 'u'
        break;
      default:
        b[i] = string[i]
        break;
    }
  }
  return b.join('')
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

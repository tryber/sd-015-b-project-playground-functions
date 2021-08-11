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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse)))
    return "cat1"
  else if ((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse)))
    return "cat2"
  else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let fizzBuzzArr = []
  for (let num of array)
    if (num % 3 === 0 && num % 5 === 0) {
    fizzBuzzArr.push('fizzBuzz')
    }
    else if (num % 5 === 0) {
      fizzBuzzArr.push('buzz')
    }
    else if (num % 3 === 0) {
      fizzBuzzArr.push('fizz')
    }
    else {
      fizzBuzzArr.push('bug!')
    }
  return fizzBuzzArr
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let fraseEncoded = ''
  for (let letra in frase)
    switch (frase[letra]) {
      case 'a':
        fraseEncoded = fraseEncoded.concat('1')
        break
      case 'e':
        fraseEncoded = fraseEncoded.concat('2')
        break
      case 'i':
        fraseEncoded = fraseEncoded.concat('3')
        break
      case 'o':
        fraseEncoded = fraseEncoded.concat('4')
        break
      case 'u':
        fraseEncoded = fraseEncoded.concat('5')
        break
      default:
        fraseEncoded = fraseEncoded.concat(frase[letra])
    } 
  return fraseEncoded
}

function decode(frase) {
  // seu código aqui
  let fraseEncoded = ''
  for (let letra in frase)
    switch (frase[letra]) {
      case '1':
        fraseEncoded = fraseEncoded.concat('a')
        break
      case '2':
        fraseEncoded = fraseEncoded.concat('e')
        break
      case '3':
        fraseEncoded = fraseEncoded.concat('i')
        break
      case '4':
        fraseEncoded = fraseEncoded.concat('o')
        break
      case '5':
        fraseEncoded = fraseEncoded.concat('u')
        break
      default:
        fraseEncoded = fraseEncoded.concat(frase[letra])
    } 
  return fraseEncoded
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

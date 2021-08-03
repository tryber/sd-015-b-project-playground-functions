// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(param1, param2) {
  let base = param1
  let height = param2
  let area = (base * height) / 2

  return area
}

// Desafio 3
function splitSentence(str) {
  let strSeparated = str.split(' ')

  return strSeparated
}

// Desafio 4
function concatName(arr) {
  let names = []
    
  names.push(arr[arr.length - 1])
  names.push(arr[0])

  return names.join(', ')
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3
  let tiePoints = 1
  let total = (wins * winPoints) + (ties * tiePoints)

  return total
}

// Desafio 6
function highestCount(arr) {
  let maior = arr[0]
  let count = 0

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > maior) {
      maior = arr[index]
    }
  }

  for (let index = 0; index < arr.length; index += 1) {
    if (maior === arr[index]) {
      count += 1
    }
  }

  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1
  let distanceCat2 = mouse - cat2

  if (distanceCat1 < 0) {
      distanceCat1 = distanceCat1 * -1
  }
  if (distanceCat2 < 0) {
      distanceCat2 = distanceCat2 * -1
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1'
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2'
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge'
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

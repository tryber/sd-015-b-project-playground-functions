// Desafio 1
function compareTrue(par1, par2) {
  // seu código aqui
  if (par1 === true && par2 === true) {
    return true 
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base*height)/2)
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}

// Desafio 4
function concatName(array) {
  // seu código aqui
    return array[array.length-1] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numberRepeat = 0
  let numberMax = array[0]

  for (let index = 0; index < array.length; index +=1) {
    if (array[index] > numberMax) {
      numberMax = array[index]
    }
  }
  for (let index = 0; index < array.length; index +=1) {
    if (array[index] === numberMax) {
      numberRepeat +=1
    }
  }
  return numberRepeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } 
    return 'os gatos trombam e o rato foge';
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

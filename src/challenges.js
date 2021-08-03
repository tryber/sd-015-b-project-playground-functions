// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let string = array.pop() + ", " + array.shift();
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints; 
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maiorNumero = arrayNumbers[0];
  let vezesQueRepete = 0;
    for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] >= maiorNumero) {
      maiorNumero = arrayNumbers[index];
    }
  }
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      if (maiorNumero === arrayNumbers[index]) {
        vezesQueRepete = vezesQueRepete + 1
      }
    }
    return vezesQueRepete;
  }


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Absoluto = Math.abs(cat1);
  let cat2Absoluto = Math.abs(cat2);

  if (cat1Absoluto > cat2Absoluto) {
    return "cat2"
  } else if (cat1Absoluto < cat2Absoluto) {
    return "cat1"
  }
  return "os gatos trombam e o rato foge"
}
console.log(catAndMouse(1, 0, 2));

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

// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  return `${lastName}, ${firstName}`;
}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayNumber) {
  let highestNumber = arrayNumber[0];
  let count = 0;
  for (let num of arrayNumber) {
    if (num > highestNumber) {
      highestNumber = num;
      count = 0;
    }
    if (num === highestNumber) {
      count += 1;
    }
  }
  return count;
}

let numberList = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(numberList));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  if (distancia2 < distancia1) {
    console.log('cat2');
  } else if (distancia1 < distancia2) {
    console.log('cat1');
  } else {
    console.log('os gatos trombam e o rato foge');
  }
}

catAndMouse(10, 25, 15);

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

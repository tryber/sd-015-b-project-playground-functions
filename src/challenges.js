// Desafio 1
function compareTrue(argument1, argument2) {
  // seu código aqui
  if (argument1 === true && argument2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return stringArray[stringArray.length - 1] + ', ' + stringArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numberList) {
  // seu código aqui
  let highestNumber = numberList[0];
  let sum = 0;

  for (let index = 0; index < numberList.length; index += 1) {
    if (numberList[index] > highestNumber) {
      highestNumber = numberList[index];
    }
  }
  for (let index = 0; index < numberList.length; index += 1) {
    if (numberList[index] === highestNumber) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  
  if (distance1 > distance2) {
    return "cat2";
  }else if (distance2 > distance1) {
    return "cat1";
  }else {
    return "os gatos trombam e o rato foge";
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

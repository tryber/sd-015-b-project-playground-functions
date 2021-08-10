// Desafio 1
function compareTrue(a, b) {
if (a === true && b === true) {
  return true;
}
else {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(initialString) {
  let resultArray = initialString.split(' ');
  return resultArray;
}

// Desafio 4
function concatName(initialArray) {
  let arraySize = initialArray.length;
  let textFirst = initialArray[0];
  let textLast = initialArray[arraySize - 1];
  let textResult = textLast.concat(", ", textFirst);
  return textResult;  
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + (ties * 1);
  return result;
}

// Desafio 6
function highestCount(initialArray) {
let highest = initialArray[0];
for (let i = 0; i < initialArray.length; i += 1) {
  if (initialArray[i] > highest) {
    highest = initialArray[i];
  }
}
let result = 0;
for (let i2 = 0; i2 < initialArray.length; i2 += 1) {
  if (highest === initialArray[i2]) {
    result += 1;
  }
}
return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = cat1 - mouse;
  let cat2Mouse = cat2 - mouse;
  let result = 0;

  if (cat1Mouse < 0) {
    cat1Mouse = cat1Mouse * -1;
  }
  if (cat2Mouse < 0) {
    cat2Mouse = cat2Mouse * -1;
  }
  if (cat1Mouse < cat2Mouse) {
    result = 'cat1';
  } 
  else if (cat1Mouse > cat2Mouse) {
    result = 'cat2';
  } 
  else if (cat1Mouse === cat2Mouse) {
    result = "os gatos trombam e o rato foge";
  }
  return result;
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

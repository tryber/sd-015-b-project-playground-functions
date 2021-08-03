// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let arrResult = [];
  for (let i = names.length - 1; i >= 0; i -= 1) {
    if (names[i] === names[names.length - 1] || names[i] === names[0]) {
      arrResult.push(names[i]);
    }
  }
  return arrResult.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let bigger = numbers[0];
  let biggerCounter = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === bigger) {
      biggerCounter.push(numbers[i]);
    }
  }
  return biggerCounter.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dCat1 = cat1 - mouse;
  let dCat2 = cat2 - mouse;
  if (dCat1 < 0) {
    dCat1 = dCat1 * -1;
  }
  
  if (dCat2 < 0) {
    dCat2 = dCat2 * -1;
  }
  
  if (dCat1 > dCat2) {
    return 'cat2';
  } else if(dCat1 === dCat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
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

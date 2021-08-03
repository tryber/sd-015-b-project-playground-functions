// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === false && b === false) {
    return false;
  } else if (a === false && b === true) {
    return false;
  } else if (a === true && b === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(phrase) {
  return (phrase.split([' ']));
}

// Desafio 4
function concatName(values) {
  let first = values[0];
  let last = values[values.length - 1];

  return (last + ', ' + first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let howMany = 0;
  let biggestNumber = Math.max(...numbers);
  for (let count = 0; count < numbers.length; count += 1) {
    if (biggestNumber === numbers[count]) {
      howMany += 1;
    }
  }
  return howMany;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(values) {
  let answer = [];

  for(let key in values){
    if (values[key] % 3 === 0 && values[key] % 5 != 0) {
      answer.push('fizz');
    } else if (values[key] % 3 != 0 && values[key] % 5 === 0) {
      answer.push('buzz');
    } else if (values[key] % 3 === 0 && values[key] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (values[key] % 3 != 0 && values[key] % 5 != 0) {
      answer.push('bug!');
    }
  }
  return answer;
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

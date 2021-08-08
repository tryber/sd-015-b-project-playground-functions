// Desafio 1
function compareTrue(a, b) {
  return a && b;
} // Aprendi essa abreviação com o Isaac no codereview

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = `${array.pop()}, ${array.shift()}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function countMaxNumber(arrayNumbers, maiorNumero) {
  let vezesQueRepete = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (maiorNumero === arrayNumbers[index]) {
      vezesQueRepete += 1;
    }
  }
  return vezesQueRepete;
}

function highestCount(arrayNumbers) {
  let maiorNumero = arrayNumbers[0];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] >= maiorNumero) {
      maiorNumero = arrayNumbers[index];
    }
  }
  return countMaxNumber(arrayNumbers, maiorNumero);
}
highestCount([1, 9, 2, 9, 9, 5, 7]);

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let cat1Absoluto = Math.abs(mouse - cat1);
  let cat2Absoluto = Math.abs(mouse - cat2);

  if (cat1Absoluto > cat2Absoluto) {
    return 'cat2';
  } if (cat1Absoluto < cat2Absoluto) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let index of arrayNumbers) {
    if (index % 3 === 0 && index % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (index % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (index % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return (arrayFizzBuzz);
}

// Desafio 9
function encode(palavra) {
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let stringConvertida = '';

  for (let index = 0; index < palavra.length; index += 1) {
    let letraAtual = palavra[index];
    if (vogais[letraAtual]) {
      stringConvertida += vogais[letraAtual];
    } else {
      stringConvertida += letraAtual;
    }
  }
  return (stringConvertida);
}

function decode(palavra) {
  const vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let stringConvertida = '';

  for (let index = 0; index < palavra.length; index += 1) {
    let letraAtual = palavra[index];
    if (vogais[letraAtual]) {
      stringConvertida += vogais[letraAtual];
    } else {
      stringConvertida += letraAtual;
    }
  }
  return (stringConvertida);
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

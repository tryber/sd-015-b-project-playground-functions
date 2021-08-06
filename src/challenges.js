// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === higherNumber) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisorTest(dividend, divider) {
  return dividend % divider === 0;
}

function ifFizzBuzz(dividend, string) {
  if (divisorTest(dividend, 15)) {
    return string.push('fizzBuzz');
  }
}

function ifFizz(dividend, string) {
  if (divisorTest(dividend, 3) && !divisorTest(dividend, 5)) {
    return string.push('fizz');
  }
}

function ifBuzz(dividend, string) {
  if (divisorTest(dividend, 5) && !divisorTest(dividend, 3)) {
    return string.push('buzz');
  }
}

function ifBug(dividend, string) {
  if (!divisorTest(dividend, 3) && !divisorTest(dividend, 5)) {
    return string.push('bug!');
  }
}

function fizzBuzz(numbers) {
  let string = [];
  for (let i = 0; i < numbers.length; i += 1) {
    (ifFizzBuzz(numbers[i], string));
    (ifFizz(numbers[i], string));
    (ifBuzz(numbers[i], string));
    (ifBug(numbers[i], string));
  }
  return string;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let resultado = string;
  let codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < string.length; i += 1) {
    for (let index in codigo) {
      if (index === string[i]) {
        resultado = resultado.replace(string[i], codigo[index]);
      }
    }
  }
  return resultado;
}

function decode(string) {
  let resultado = string;
  let codigo = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let i = 0; i < string.length; i += 1) {
    for (let index in codigo) {
      if (codigo[index] === string[i]) {
        resultado = resultado.replace(string[i], index);
      }
    }
  }
  return resultado;
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

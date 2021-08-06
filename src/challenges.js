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
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function divisorTest(dividend, divider) {
  return dividend % divider === 0;
}

function fizzBuzz(a) {
  let resultado = [];
  for (let i = 0; i < a.length; i += 1) {
    if (divisorTest(a[i], 15)) {
      resultado.push('fizzBuzz');
    } else if (divisorTest(a[i], 3)) {
      resultado.push('fizz');
    } else if (divisorTest(a[i], 5)) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
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

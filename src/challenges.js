// Desafio 1
function compareTrue(a, b) {
  let d1;
  if (a && b) {
    d1 = true;
  } else { d1 = false; }
  return d1;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let d3 = string.split(' ');
  return (d3);
}

// Desafio 4
function concatName(arrayDeStrings) {
  let d4 = '';
  d4 += arrayDeStrings[arrayDeStrings.length - 1];
  d4 += ', ';
  d4 += arrayDeStrings[0];
  return d4;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function maiorN(array) {
  let maior = Number.NEGATIVE_INFINITY;
  for (let n of array) {
    if (n > maior) {
      maior = n;
    }
  }
  return maior;
}

function highestCount(arrayDeNumeros) {
  let d6 = 0;
  let larger = maiorN(arrayDeNumeros);
  for (let n of arrayDeNumeros) {
    if (n === larger) {
      d6 += 1;
    }
  }
  return d6;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d7;
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    d7 = 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    d7 = 'os gatos trombam e o rato foge';
  } else { d7 = 'cat2'; }
  return d7;
}

// Desafio 8
function oquePushar(x) {
  let push;
  if (x % 3 === 0 && x % 5 === 0) {
    push = 'fizzBuzz';
  } else if (x % 3 === 0) {
    push = 'fizz';
  } else if (x % 5 === 0) {
    push = 'buzz';
  } else { push = 'bug!'; }
  return push;
}
function fizzBuzz(arrayDeNumeros) {
  let d8 = [];
  for (let n of arrayDeNumeros) {
    d8.push(oquePushar(n));
  }
  return d8;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < array.length; i += 1) {
    if (code[array[i]]) {
      array[i] = code[array[i]];
    }
  } return array.join('');
}

function decode(string) {
  let array = string.split('');
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < array.length; i += 1) {
    if (code[array[i]]) {
      array[i] = code[array[i]];
    }
  } return array.join('');
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

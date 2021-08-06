// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(a, b);

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea(10, 50);

// Desafio 3
<<<<<<< HEAD
function splitSentence(phrase) {
  return phrase.split(' ');
=======
function splitSentence(phrase, str) {
  str = ' ';
  phrase = str.split(' ');
  return phrase;
>>>>>>> f87318910ee0a22d66d0622c37a15e2c956e94b2
}
// Desafio 4
<<<<<<< HEAD
function concatName(list) {
  start = list[0];
  final = list[list.length - 1];
  return `${final}, ${start}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  total = wins * 3 + ties;
=======
function concatName(array) {
  let list = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

  let start = list[0];
  let final = list[list.length - 1];
  let array = [final, start];
  return array;
}

// Desafio 5
function footballPoints(total) {
  let wins = 14;
  let ties = 8;
  let total = wins * 3 + ties * 1;
>>>>>>> f87318910ee0a22d66d0622c37a15e2c956e94b2
  return total;
}

// Desafio 6
function highestCount(array) {
  let numberHigher = array[0];
  let cont = 0;
  for (let index = 1; index < array.length; index++) {
    if (array[index] > numberHigher) {
      numberHigher = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === numberHigher) {
      cont++;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
<<<<<<< HEAD
  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat1 > cat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
=======
  cat1 = 6;
  cat2 = 12;
  mouse = 0;
>>>>>>> f87318910ee0a22d66d0622c37a15e2c956e94b2

  if (cat1 < cat2) {
    return 'Gato 1';
  } else if (cat2 < cat1) {
    return 'Gato 2';
  } else {
    return 'Os gatos se trombam';
  }
}
// Desafio 8
<<<<<<< HEAD
function lista(array) {
=======
function fizzBuzz(array) {
  array = [64];

>>>>>>> f87318910ee0a22d66d0622c37a15e2c956e94b2
  if (array % 3 === 0 && array % 5 === 0) {
    return 'fizzBuzz';
  }
  if (array % 3 === 0) {
    return 'fizz';
  }
  if (array % 5 === 0) {
    return 'buzz';
  } else {
<<<<<<< HEAD
    return 'bug!';
  }
}
function fizzBuzz(arrayFizzBuzz) {
  let array = [];

  for (let index = 0; index < arrayFizzBuzz.length; index += 1) {
    array.push(lista(arrayFizzBuzz[index]));
  }
  return array;
=======
    return 'bug';
  }
>>>>>>> f87318910ee0a22d66d0622c37a15e2c956e94b2
}

// Desafio 9
function encode(phrase, replace) {
<<<<<<< HEAD
=======
  phrase = ' um dia lindo';
>>>>>>> f87318910ee0a22d66d0622c37a15e2c956e94b2
  return phrase
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}
function decode(phrase2, replace) {
<<<<<<< HEAD
=======
  phrase2 = 'h3 th2r2!';
>>>>>>> f87318910ee0a22d66d0622c37a15e2c956e94b2
  return phrase2
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
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

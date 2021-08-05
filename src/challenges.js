// Desafio 1

function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2.
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(array) {
  let max = 0;
  let cont = 0;
  for (let index in array) {
    if (max < Math.abs(array[index])) { //debugar
      max = array[index];
    }
  }
  for (let index in array) {
    if (array[index] === max) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return "cat1"
  } else if (distanciaCat1 === distanciaCat2) {
    return "os gatos trombam e o rato foge"
  } else {
    return "cat2"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array2[index] = "fizzBuzz"
    } else if (array[index] % 3 === 0) {
      array2[index] = "fizz"
    } else if (array[index] % 5 === 0) {
      array2[index] = "buzz"
    } else {
      array2[index] = "bug!"
    }
  }
  return array2
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  let element = '';

  for (let index = 0; index < array.length; index++) {

    switch (array[index]) {
      case 'a':
        array[index] = '1';
        break;
      case 'e':
        array[index] = '2';
        break;
      case 'i':
        array[index] = '3';
        break;
      case 'o':
        array[index] = '4';
        break;
      case 'u':
        array[index] = '5';
        break;
    }

  }

  for (let index = 0; index < array.length; index += 1) {
    element += array[index];

  }
  return element;
}

function decode(string) {
  let array = string.split('');
  let element = '';

  for (let index = 0; index < array.length; index++) {

    switch (array[index]) {
      case '1':
        array[index] = 'a';
        break;
      case '2':
        array[index] = 'e';
        break;
      case '3':
        array[index] = 'i';
        break;
      case '4':
        array[index] = 'o';
        break;
      case '5':
        array[index] = 'u';
        break;
    }

  }

  for (let index = 0; index < array.length; index += 1) {
    element += array[index];

  }
  return element;
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

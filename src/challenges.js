// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let separate = string.split(' ');
  return separate;
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  let concat = ultimo.concat(', ', primeiro);

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;

  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max(...array);
  let count = 0;

  for (let i of array) {
    if (i === maior) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzBuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }

  return result;
}

// Desafio 9
function encode(string) {
  let result = [];

  for (let letter of string) {
    if (letter === 'a') {
      result.push('1');
    } else if (letter === 'e') {
      result.push('2');
    } else if (letter === 'i') {
      result.push('3');
    } else if (letter === 'o') {
      result.push('4');
    } else if (letter === 'u') {
      result.push('5');
    } else {
      result.push(letter);
    }
  }
  let final = result.join('');
  
  return final;
}

function decode(string) {
  let result = [];

  for (let letter of string) {
    if (letter === '1') {
      result.push('a');
    } else if (letter === '2') {
      result.push('e');
    } else if (letter === '3') {
      result.push('i');
    } else if (letter === '4') {
      result.push('o');
    } else if (letter === '5') {
      result.push('u');
    } else {
      result.push(letter);
    }
  }
  let final = result.join('');
  
  return final;
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

// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(value) {
  let palavra = '';
  let retorno = [];
  value += ' ';
  for (let caractere of value) {
    if (caractere !== ' ') {
      palavra += String(caractere);
    } else {
      retorno.push(palavra);
      palavra = '';
    }
  } return retorno;
}

// Desafio 4
function concatName(value) {
  return value[(value.length -1)] + ', ' + value[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array.reduce(function(a,b) {
    return Math.max(a, b);
  });
  let count = 0;
  for (index = 0; index < array.length; index ++) {
    if (array[index] === highestNumber) {
      count += 1;
    } else {
      count = count;
    }
  } return count;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse-cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse-cat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let answer = [];
  for (index = 0; index < array.length; index ++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      answer.push('fizz');
    } else if (array[index] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  } return answer;
}

// Desafio 9
function encode(string) {
  let phrase = '';
  for (let caractere of string) {
    if (caractere === 'a') {
      phrase += '1';
    } else if (caractere === 'e') {
      phrase += '2';
    } else if (caractere === 'i') {
      phrase += '3';
    } else if (caractere === 'o') {
      phrase += '4';
    } else if (caractere === 'u') {
      phrase += '5';
    } else {
      phrase += caractere;
    }
  } return phrase;
}

function decode(string) {
  let phrase = '';
  for (let caractere of string) {
    if (caractere === '1') {
      phrase += 'a';
    } else if (caractere === '2') {
      phrase += 'e';
    } else if (caractere === '3') {
      phrase += 'i';
    } else if (caractere === '4') {
      phrase += 'o';
    } else if (caractere === '5') {
      phrase += 'u';
    } else {
      phrase += caractere;
    }
  } return phrase;
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

console.log(compareTrue(1,0))
// Desafio 1 a
function compareTrue(a, b) {
  return a && b;
}

compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  let sum = (base * height) / 2;
  return sum;
}

calcArea(5, 2);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(lista) {
  let lastName = lista[lista.length - 1];
  let firstName = lista[0];
  return `${lastName}, ${firstName}`;
}

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(nomes));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

console.log(footballPoints(14, 8));

// Desafio 6

function highestCount(numbers) {
  let highestNumber = numbers[0];
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
      count = 0;
    } if (numbers[index] === highestNumber) {
      count += 1;
    }
  } return count;
}

let array = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(array));

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = ath.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat2 < distanciaCat1) {
    console.log('cat 2');
  } else if (distanciaCat1 < distanciaCat2) {
    console.log('cat 1');
  } else {
    console.log('os gatos trombam e o rato foge');
  }
}

catAndMouse(5, 7, 7);

// Desafio 8

function div3(dividend) {
  return dividend % 3 === 0;
}
function div5(dividend) {
  return dividend % 5 === 0;
}
function isFizz(num, arrayFizzBuzz) {
  if (div3(num) && !div5(num)) {
    arrayFizzBuzz.push(‘fizz’);
  }
}
function isBuzz(num, arrayFizzBuzz) {
  if (div5(num) && !div3(num)) {
    arrayFizzBuzz.push(‘buzz’);
  }
}
function isFizzBuzz(num, arrayFizzBuzz) {
  if (div3(num) && div5(num)) {
    arrayFizzBuzz.push(‘fizzBuzz’);
  }
}
function isBug(num, arrayFizzBuzz) {
  if (!div3(num) && !div5(num)) {
    arrayFizzBuzz.push(‘bug!’);
  }
}
function fizzBuzz(arrayFizzBuzz) {
  let result = [];
  for (let position of arrayFizzBuzz) {
    isFizz(position, result);
    isBuzz(position, result);
    isFizzBuzz(position, result);
    isBug(position, result);
  }
  return result;
}

let fizzBuzzArray = [2, 15, 7, 9, 45];
fizzBuzz(fizzBuzzArray);

// Desafio 9

function encode(mensagem) {
  let replaceMsg = mensagem.replace(/a/g, '1').replace(/e/g, '2')
    .replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return replaceMsg;
}

console.log(encode('hi there!'));

function decode(stringContraria) {
  let replaceMsg = stringContraria.replace(/1/g, 'a').replace(/2/g, 'e')
    .replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return replaceMsg;
}

console.log(decode('h3 th2r2!'));

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

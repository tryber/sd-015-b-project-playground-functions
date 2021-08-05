// Desafio 1
function compareTrue(parametro1, parametro2) {
  // seu código aqui
  return (parametro1 && parametro2);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array.pop()}, ${array.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function biggestNumber(numbers) {
  let [maior] = numbers;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) maior = numbers[i];
  }
  return maior;
}
function highestCount(numbers) {
  // seu código aqui
  let maior = biggestNumber(numbers);
  let cont = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === maior) cont += 1;
  }
  return cont;
}

// Desafio 7
function calcDis(mouse, cat) {
  return Math.abs(mouse - cat);
}
function catAndMouse(mouse, catOne, catTwo) {
  // seu código aqui
  let catOneDis = calcDis(mouse, catOne);
  let catTwoDis = calcDis(mouse, catTwo);
  let string = '';

  if (catOneDis < catTwoDis) string = 'cat1';
  else if (catTwoDis < catOneDis) string = 'cat2';
  else string = 'os gatos trombam e o rato foge';

  return string;
}

// Desafio 8
function fizzBuzzCheck(number) {
  let string = '';
  if (number % 3 === 0 && number % 5 === 0) string = 'fizzBuzz';
  else if (number % 3 === 0) string = 'fizz';
  else if (number % 5 === 0) string = 'buzz';
  else string = 'bug!';

  return string;
}
function fizzBuzz(numbers) {
  // seu código aqui
  let fizzBuzzes = [];
  for (let number of numbers) {
    fizzBuzzes.push(fizzBuzzCheck(number));
  }
  return fizzBuzzes;
}

// Desafio 9
function encodeAux(char) {
  let numReturn = 0;
  let chars = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];

  for (let i = 0; i < chars.length; i += 1) {
    if (char === chars[i]) {
      numReturn = numbers[i];
    }
  }

  return numReturn;
}
function encode(string) {
  // seu código aqui
  let vecString = string.split('');
  for (let i = 0; i < vecString.length; i += 1) {
    if (encodeAux(vecString[i]) !== 0) {
      vecString[i] = encodeAux(vecString[i]);
    }
  }
  return vecString.join('');
}
function decodeAux(num) {
  let charReturn = 0;
  let chars = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];

  for (let i = 0; i < chars.length; i += 1) {
    if (num === numbers[i]) {
      charReturn = chars[i];
    }
  }
  return charReturn;
}
function decode(string) {
  // seu código aqui
  let vecString = string.split('');
  for (let i = 0; i < vecString.length; i += 1) {
    if (decodeAux(vecString[i]) !== 0) {
      vecString[i] = decodeAux(vecString[i]);
    }
  }
  return vecString.join('');
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

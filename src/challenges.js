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
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  else if (number % 3 === 0) return 'fizz';
  else if (number % 5 === 0) return 'buzz';
  return 'bug!';
}
function fizzBuzz(numbers) {
  // seu código aqui
  let fizzBuzzes = [];
  for (number of numbers) {
    fizzBuzzes.push(fizzBuzzCheck(number))
  }
  return fizzBuzzes;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let vecString = string.split('');
  for (let i = 0; i < vecString.length; i += 1) {
    if (vecString[i] === 'a') vecString[i] = 1;
    else if (vecString[i] === 'e') vecString[i] = 2;
    else if (vecString[i] === 'i') vecString[i] = 3;
    else if (vecString[i] === 'o') vecString[i] = 4;
    else if (vecString[i] === 'u') vecString[i] = 5;
  }
  return vecString.join('');
}
function decode(string) {
  // seu código aqui
  let vecString = string.split('');
  for (let i = 0; i < vecString.length; i += 1) {
    if (vecString[i] === '1') vecString[i] = 'a';
    else if (vecString[i] === '2') vecString[i] = 'e';
    else if (vecString[i] === '3') vecString[i] = 'i';
    else if (vecString[i] === '4') vecString[i] = 'o';
    else if (vecString[i] === '5') vecString[i] = 'u';
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

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
  console.log(maior)
  for (number of numbers) {
    if (number > maior) maior = number;
  }
  return maior;
}
function highestCount(numbers) {
  // seu código aqui
  let maior = biggestNumber(numbers);
  let cont = 0;
  for (let number of numbers) {
    if (number === maior) cont += 1;
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
function fizzBuzz(numbers) {
  // seu código aqui
  let fizzBuzzes = [];
  for (number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) fizzBuzzes.push('fizzBuzz');
    else if (number % 3 === 0) fizzBuzzes.push('fizz');
    else if (number % 5 === 0) fizzBuzzes.push('buzz');
    else fizzBuzzes.push('bug!');
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

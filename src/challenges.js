// Desafio 1
function compareTrue(bolean, bolean2) {
  return bolean && bolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points += wins * 3;
  points += ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  let save = arr[0];
  let count = 0;
  for (let num of arr) {
    if (num > save) {
      save = num;
      count = 0;
    }
    if (num === save) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let xcat1 = Math.abs(mouse - cat1);
  let xcat2 = Math.abs(mouse - cat2);
  if (xcat1 === xcat2) return 'os gatos trombam e o rato foge';
  return xcat1 > xcat2 ? 'cat2' : 'cat1';
}

// Desafio 8

const restIsValid = (num, divisor) => num % divisor === 0;

const fizzBuzzStr = () => 'fizzBuzz';
const buzzStr = () => 'buzz';
const fizzStr = () => 'fizz';
const bugStr = () => 'bug!';

let fizzBuzzArray = [];

const ifIsFizzBuzz = (num) => {
  if (restIsValid(num, 15)) return fizzBuzzArray.push(fizzBuzzStr());
};

const ifIsBuzz = (num) => {
  if (restIsValid(num, 5) && !restIsValid(num, 3)) return fizzBuzzArray.push(buzzStr());
};

const ifIsFizz = (num) => {
  if (restIsValid(num, 3) && !restIsValid(num, 5)) return fizzBuzzArray.push(fizzStr());
};

const ifIsBug = (num) => {
  if (!restIsValid(num, 5) && !restIsValid(num, 3)) return fizzBuzzArray.push(bugStr());
};

const checkFizzBuzz = (num) => {
  ifIsFizzBuzz(num);
  ifIsFizz(num);
  ifIsBuzz(num);
  ifIsBug(num);
};
function fizzBuzz(arr) {
  fizzBuzzArray = []
  for (let num of arr) {
    checkFizzBuzz(num);
  }
  return fizzBuzzArray;
}


// Desafio 9
function encode(str) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return str
    .split('')
    .map((el) => vogais[el] || el)
    .join('');
}

function decode(str) {
  let nums = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return str
    .split('')
    .map((el) => nums[el] || el)
    .join('');
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

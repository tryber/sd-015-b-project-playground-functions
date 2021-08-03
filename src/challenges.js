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
  let save = 0;
  let count = 0;
  for (let num of arr) {
    if (num > save) {
      save = num;
      count = 0;
    }
    if (num === save) count++;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let xcat1 = 0;
  let xcat2 = 0;
  cat1 > mouse ? (xcat1 = cat1 - mouse) : (xcat1 = mouse - cat1);
  cat2 > mouse ? (xcat2 = cat2 - mouse) : (xcat2 = mouse - cat2);
  console.log(xcat1, xcat2);
  if (xcat1 === xcat2) return `os gatos trombam e o rato foge`;
  return xcat1 > xcat2 ? `cat2` : `cat1`;
}

// Desafio 8
function fizzBuzz(arr) {
  let fizzBuzzArray = [];
  for (let num of arr) {
    if (num % 5 === 0 && num % 3 === 0) {
      fizzBuzzArray.push(`fizzBuzz`);
    } else if (num % 5 === 0) {
      fizzBuzzArray.push(`buzz`);
    } else if (num % 3 === 0) {
      fizzBuzzArray.push(`fizz`);
    } else {
      fizzBuzzArray.push(`bug!`);
    }
  }
  return fizzBuzzArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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

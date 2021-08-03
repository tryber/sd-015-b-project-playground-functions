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
  return `${arr[arr.length - 1]} ${arr[0]}`;
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
  let count = 0;
  let save = 0;
  for (let i in arr) {
    for (let j in arr) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > save) {
      save = count;
    }
    count = 0;
  }
  return save;
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
    } else if (num % 5 == 0) {
      fizzBuzzArray.push(`buzz`);
    } else if (num % 3 === 0) {
      fizzBuzzArray.push(`fizz`);
    } else {
      fizzBuzzArray.push(`bug`);
    }
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
console.log(decode(`h3 th2r2!`));

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

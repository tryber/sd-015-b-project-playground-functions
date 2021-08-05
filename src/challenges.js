// Desafio 1
function compareTrue(param1, param2) {
  return (param1 && param2) ? true : false
}

// Desafio 2
function calcArea(param1, param2) {
  let base = param1;
  let height = param2;
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(str) {
  let strSeparated = str.split(' ');

  return strSeparated;
}

// Desafio 4
function concatName(arr) {
  let names = [];

  names.push(arr[arr.length - 1]);
  names.push(arr[0]);

  return names.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let total = (wins * winPoints) + (ties * tiePoints);

  return total;
}

// Desafio 6
function highestCount(arr) {
  let maior = arr[0];
  let count = 0;

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > maior) {
      maior = arr[index];
    }
  }

  for (let index = 0; index < arr.length; index += 1) {
    if (maior === arr[index]) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  distanceCat1 = Math.abs(distanceCat1);
  distanceCat2 = Math.abs(distanceCat2);

  if (distanceCat1 < distanceCat2) return 'cat1';
  if (distanceCat2 < distanceCat1) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let final = [];

  for (let index = 0; index < arr.length; index += 1) {
    if ((arr[index] % 3 === 0) && (arr[index] % 5 === 0)) {
      final.push('fizzBuzz');
    } else if (arr[index] % 3 === 0) {
      final.push('fizz');
    } else if (arr[index] % 5 === 0) {
      final.push('buzz');
    } else {
      final.push('bug!');
    }
  }

  return final;
}

// Desafio 9
function encode(str) {
  let strEncoded = '';
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index = 0; index < str.length; index += 1) {
    let verification = false;

    for (let letter in vowels) {
      if (str[index] === letter) {
        strEncoded += vowels[letter];
        verification = true;
      }
    }

    if (verification === false) {
      strEncoded += str[index];
    }
  }

  return strEncoded;
}

function decode(str) {
  let strDecoded = '';
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let index = 0; index < str.length; index += 1) {
    let verification = false;
    for (let letter in vowels) {
      if (str[index] === letter) {
        strDecoded += vowels[letter];
        verification = true;
      }
    }

    if (verification === false) {
      strDecoded += str[index];
    }
  }

  return strDecoded;
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

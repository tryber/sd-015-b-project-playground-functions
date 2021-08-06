// Desafio 1
function compareTrue(a1, a2) {
  
  if (a1 === true && a2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(1 === 1);

// Desafio 2
function calcArea(base, height) {
  
  let area = (base * height) / 2;
  return area;
}
calcArea(10, 50);

// Desafio 3
function splitSentence(str, sep) {
  
  let strToArr = str.split(' ');
  return strToArr;
}
splitSentence('go Trybe');

// Desafio 4
function concatName(arr) {
  let firtsArr = arr[0];
  let lastArr = arr[arr.length - 1];
  let result = lastArr + ', ' + firtsArr;
  return result;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3 * wins;
  let draw = 1 * ties;
  let points = victory + draw;
  return points;
}
footballPoints(14, 8);

// Desafio 6
function highestCount(arrP) {
  let bigestN = Math.max.apply(null, arrP);
  let rep = 0;
  for (let cont = 0; cont < arrP.length; cont += 1) {
    if (arrP[cont] === bigestN) {
      rep += 1;
    }
  }
  return rep;
}

highestCount([0, 4, 4, 4, 9, 2, 1]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
catAndMouse(4, 3, 2);

// Desafio 8
function fizzBuzz(param) {
  let results = [];
  for (let cont = 0; cont < param.length; cont += 1) {
    let divisionThree = param[cont] % 3 === 0;
    let divisionFive = param[cont] % 5 === 0;
    let divisionThreeAndFive = divisionThree && divisionFive;
    if (divisionThreeAndFive) {
      results.push('fizzBuzz');
    } else if (divisionThree) {
      results.push('fizz');
    } else if (divisionFive) {
      results.push('buzz');
    } else {
      results.push('bug!');
    }
  }
  return results;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(crypt) {
  for (let cont = 0; cont < crypt.length; cont += 1) {
    if (crypt[cont] === 'a') {
      crypt = crypt.replace(/a/g, '1');
    }
    if (crypt[cont] === 'e') {
      crypt = crypt.replace(/e/g, '2');
    }
    if (crypt[cont] === 'i') {
      crypt = crypt.replace(/i/g, '3');
    }
    if (crypt[cont] === 'o') {
      crypt = crypt.replace(/o/g, '4');
    }
    if (crypt[cont] === 'u') {
      crypt = crypt.replace(/u/g, '5');
    }
  }
  return crypt;
}
encode('hi there!');

function decode(decrypt) {
  for (let cont = 0; cont < decrypt.length; cont += 1) {
    if (decrypt[cont] === '1') {
      decrypt = decrypt.replace(/1/g, 'a');
    }
    if (decrypt[cont] === '2') {
      decrypt = decrypt.replace(/2/g, 'e');
    }
    if (decrypt[cont] === '3') {
      decrypt = decrypt.replace(/3/g, 'i');
    }
    if (decrypt[cont] === '4') {
      decrypt = decrypt.replace(/4/g, 'o');
    }
    if (decrypt[cont] === '5') {
      decrypt = decrypt.replace(/5/g, 'u');
    }
  }
  return decrypt;
}
decode('h3 th2r2!');

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

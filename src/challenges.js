// Desafio 1
function compareTrue(a, b) {
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a && b;
  }
}

// console.log( compareTrue(false, true) ); // teste 1
// console.log( compareTrue(false, false) ); // teste 2
// console.log( compareTrue(true, true) ); // teste 3
// console.log( compareTrue(1, true) ); // teste extra

// Desafio 2
function calcArea(base, height) {
  if (typeof base === 'number' && typeof height === 'number') {
    return base * height * 0.5;
  }
}

// console.log( calcArea(10, 50) ); // teste 1
// console.log( calcArea(5, 2) ); // teste 2
// console.log( calcArea(51, 1) ); // teste 3
// console.log( calcArea(5, '5') ); // teste extra

// Desafio 3
function splitSentence(str) {
  if (typeof str === 'string') {
    return str.split(' ');
  }
}

// console.log(splitSentence('go Trybe')); // teste 1
// console.log(splitSentence('vamo que vamo')); // teste 2
// console.log(splitSentence('foguete')); // teste 3
// console.log(splitSentence(123)); // teste extra

// Desafio 4
function concatName(arr) {
  if (typeof arr === 'object') {
    return `${arr[arr.length - 1]}, ${arr[0]}`;
  }
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // teste 1
// console.log(concatName(['foguete', 'não', 'tem', 'ré'])); // teste 2
// console.log(concatName(['captain', 'my', 'captain'])); // teste 3
// console.log(concatName('123')); // teste extra

// Desafio 5
function footballPoints(wins, ties) {
  if (Math.floor(wins) === wins && Math.floor(ties) === ties) {
    return wins * 3 + ties;
  }
}

// console.log( footballPoints(14, 8) ); // teste 1
// console.log( footballPoints(1, 2) ); // teste 2
// console.log( footballPoints(0, 0) ); // teste 3
// console.log( footballPoints(true, 0) ); // teste extra
// console.log( footballPoints(1.5, 0) ); // teste extra
// console.log( footballPoints(-2, 0) ); // teste extra

// Desafio 6
function highestCount(arr) {
  let max = arr[0];
  let aux = 0;
  for (let i of arr) {
    if (i >= max) {
      max = i;
      aux = arr.filter(function (x) {
        return x === i;
      }).length;
    }
  }
  return aux;
}

// console.log( highestCount([9, 1, 2, 3, 9, 5, 7]) ) // teste 1
// console.log( highestCount([0, 4, 4, 4, 9, 2, 1]) ) // teste 2
// console.log( highestCount([0, 0, 0]) ) // teste 3

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let line;
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 > dist2) {
    line = 'cat2';
  } else if (dist1 < dist2) {
    line = 'cat1';
  } else if (dist1 === dist2) {
    line = 'os gatos trombam e o rato foge';
  }
  return line;
}

// console.log( catAndMouse(3, 2) ); // teste 1
// console.log( catAndMouse(6, 12) ); // teste 2
// console.log( catAndMouse(5, 5) ); // teste 3

// Desafio 8
function fizzBuzz(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let div3 = arr[i] % 3 === 0;
    let div5 = arr[i] % 5 === 0;
    let div35 = div3 && div5;
    if (div35) {
      arr[i] = ('fizzBuzz');
    } else if (div5) {
      arr[i] = ('buzz');
    } else if (div3) {
      arr[i] = ('fizz');
    } else {
      arr[i] = ('bug!');
    }
  }
  return arr;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45])); // teste 1
// console.log(fizzBuzz([7, 9])); // teste 2
// console.log(fizzBuzz([9, 25])); // teste 3

// Desafio 9
function encode(str) {
  let aux = '';
  for (let i of str) {
    switch (i) {
    case 'a':
      aux += 1;
      break;
    case 'e':
      aux += 2;
      break;
    case 'i':
      aux += 3;
      break;
    case 'o':
      aux += 4;
      break;
    case 'u':
      aux += 5;
      break;
    default:
      aux += i;
    }
  }
  return aux;
}

// console.log( encode('hi there!') ); // teste 1

function decode(str) {
  let aux = '';
  for (let i of str) {
    switch (i) {
    case '1':
      aux += 'a';
      break;
    case '2':
      aux += 'e';
      break;
    case '3':
      aux += 'i';
      break;
    case '4':
      aux += 'o';
      break;
    case '5':
      aux += 'u';
      break;
    default:
      aux += i;
    }
  }
  return aux;
}

// console.log( decode('h3 th2r2!') ); // teste 1

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

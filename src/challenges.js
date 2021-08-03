// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[(array.length) - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let contador = 0;
  for (let key in array) {
    if (maior < array[key]) {
      maior = array[key];
    }
  }
  for (let key in array) {
    if (maior === array[key]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distMouseCat1 = mouse - cat1;
  let distMouseCat2 = mouse - cat2;
  if (distMouseCat1 < 0) {
    distMouseCat1 *= (-1);
  }
  if (distMouseCat2 < 0) {
    distMouseCat2 *= (-1);
  }
  if (distMouseCat1 === distMouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  }
  else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let contador = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      contador.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      contador.push('fizz');
    } else if (array[key] % 5 === 0) {
      contador.push('buzz');
    } else {
      contador.push('bug!');
    }
  }
  return contador;
}

// Desafio 9
function encodeA(string) {
  let array = string.split('');
  for (let key in array) {
    if (array[key] === 'a') {
      array.splice(key, 1, '1');
    }
  }
  return array;
}

function encodeE(array) {
  for (let key in array) {
    if (array[key] === 'e') {
      array.splice(key, 1, '2');
    }
  }
  return array;
}

function encodeI(array) {
  for (let key in array) {
    if (array[key] === 'i') {
      array.splice(key, 1, '3');
    }
  }
  return array;
}

function encodeO(array) {
  for (let key in array) {
    if (array[key] === 'o') {
      array.splice(key, 1, '4');
    }
  }
  return array;
}

function encodeU(array) {
  for (let key in array) {
    if (array[key] === 'u') {
      array.splice(key, 1, '5');
    }
  }
  return array;
}

function encode(string) {
  // seu código aqui
  let encode1 = encodeA(string);
  let encode2 = encodeE(encode1);
  let encode3 = encodeI(encode2);
  let encode4 = encodeO(encode3);
  let encode5 = encodeU(encode4).join('');
  return encode5;
}

  // encode
function decode1(string) {
  let array = string.split('');
  for (let key in array) {
    if (array[key] === '1') {
      array.splice(key, 1, 'a');
    }
  }
  return array;
}

function decode2(array) {
  for (let key in array) {
    if (array[key] === '2') {
      array.splice(key, 1, 'e');
    }
  }
  return array;
}

function decode3(array) {
  for (let key in array) {
    if (array[key] === '3') {
      array.splice(key, 1, 'i');
    }
  }
  return array;
}

function decode4(array) {
  for (let key in array) {
    if (array[key] === '4') {
      array.splice(key, 1, 'o');
    }
  }
  return array;
}

function decode5(array) {
  for (let key in array) {
    if (array[key] === '5') {
      array.splice(key, 1, 'u');
    }
  }
  return array;
}
function decode(string) {
  // seu código aqui
  let decodeA = decode1(string);
  let decodeE = decode2(decodeA);
  let decodeI = decode3(decodeE);
  let decodeO = decode4(decodeI);
  let decodeU = decode5(decodeO).join('');
  return decodeU;
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

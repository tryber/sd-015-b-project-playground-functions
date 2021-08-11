// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } if (param1 && param2 === false) {
    return false;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let stringsplit = string.split(' ');
  return stringsplit;
}

// Desafio 4
function concatName(array) {
  let ultimoitem = array[array.length - 1];
  let firstitem = array[0];
  let string = ultimoitem.concat(firstitem);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sumPoints = (wins * 3) + ties;
    return sumPoints; 
}

// Desafio 6
function highestCount(arr) {
  let maior = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > maior) {
      maior = arr[index];
    }
  }
  let soma = 0;
  for (let index2 = 0; index2 < arr.length; index2 += 1) {
    if(maior === arr[index2]) {
      soma += 1;
    }
  } return soma;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positioncat1 = mouse - cat1;
  let positioncat2 = mouse - cat2;
  let gato1 = 'cat1';
  let gato2 = 'cat2';
  let ratoganha = 'os gatos trombam e o rato foge';
  if (positioncat1 < positioncat2) {
    return gato1;
  } else if (positioncat1 > positioncat2) {
    return gato2;
  } else if (positioncat1 === positioncat2) {
    return ratoganha;
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let array = []; 
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
      array.push('fizz');
    } else if (arr[index] % 5 === 0 && arr[index] % 3 !== 0) {
      array.push('buzz');
    } else if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else {
      array.push('bug!');
    }
  } return array;
}


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
}

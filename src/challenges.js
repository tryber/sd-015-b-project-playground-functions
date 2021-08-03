// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else if (param1 === false && param2 === true) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  if (height < 2) {
    height = 0;
    result = base / 2;
    return result;
  } else {
    result = (base * height) / 2;
    return result;
  }
}

// Desafio 3
function splitSentence(sentence) {
  let array = sentence;
  return array.split(' ');
}

// Desafio 4
function concatName(string) {
  let resultado = string;
  let pos1 = resultado.pop();
  let pos2 = resultado[0];
  return pos1 + ', ' + pos2;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let empate = 1;
  let jogosWin = victory * wins;
  let jogoTies = empate * ties;
  return jogosWin + jogoTies;
}

// Desafio 6
function highestCount(maior) {
  let nMaior = maior[0];
  //Este trecho, peguei inspiração em alguns exercícios realizados anteriormente.
  for (let index = 1; index < maior.length; index += 1) {
    if (maior[index] > nMaior) {
      nMaior = maior[index];
    }
  }
  let quantidadeNMaior = 0;
  for (let index = 0; index < maior.length; index += 1) {
    if (nMaior === maior[index]) {
      quantidadeNMaior++;
    }
  }
  return quantidadeNMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanciaCat2 > distanceCat1) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
console.log(catAndMouse(10, 7, 8));

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      string.push('fizz');
    } else if (array[key] % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
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
};

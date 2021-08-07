// Desafio 1
// 1 - Crie uma função usando o operador &&.
function compareTrue(par1, par2) {
  if (par1 && par2) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
// 2 - Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  let resultado = (base * height) / 2;

  return resultado;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
// 3 - Crie uma função que divida a frase
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
// 4 - Crie uma função que use concatenação de strings
function concatName(arrayString) {
  let concatString = '';
  concatString += arrayString[arrayString.length - 1];
  concatString += ', ';
  concatString += arrayString[0];
  return concatString;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
// 5 - Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  let vitoria = 3;
  let empate = 1;
  let total = (vitoria * wins) + (empate * ties);
  return total;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
// 6 - Crie uma função que calcule a repetição do maior número
function highestCount(arrayNumeros) {
  let numeroMaior = -2;
  let numeroDeRepeticoes = 0;
  for (let i in arrayNumeros) {
    if (numeroMaior < arrayNumeros[i]) {
      numeroMaior = arrayNumeros[i];
    }
  }
  for (let i2 in arrayNumeros) {
    if (numeroMaior === arrayNumeros[i2]) {
      numeroDeRepeticoes += 1;
    }
  }
  return numeroDeRepeticoes;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([-2, -2, -1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
// 7 - Crie uma função de Caça ao Rato
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  if (distCat1 < 0) {
    distCat1 = distCat1 * -1;
  }
  if (distCat2 < 0) {
    distCat2 = distCat2 * -1;
  }
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  } if (distCat1 < distCat2) {
    return 'cat1';
  }
  return 'cat2';
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 5, 5));
console.log(catAndMouse(1, 0, 2));

// Desafio 8
// 8 - Crie uma função FizzBuzz
function fizzBuzz(listaNumeros) {
  let listaFizzBuzz = [];
  for (let index = 0; index < listaNumeros.length; index += 1) {
    if (listaNumeros[index] % 3 === 0 && listaNumeros[index] % 5 === 0) {
      listaFizzBuzz.push('fizzBuzz');
    } else if (listaNumeros[index] % 5 === 0) {
      listaFizzBuzz.push('buzz');
    } else if (listaNumeros[index] % 3 === 0) {
      listaFizzBuzz.push('fizz');
    } else {
      listaFizzBuzz.push('bug!');
    }
  }
  return listaFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
// 9 - Crie uma função que Codifique e Decodifique
function encode(frase1) {
  let listaFrase1 = frase1.split('');
  for (let i in listaFrase1) {
    if (listaFrase1[i] === 'a') {
      listaFrase1[i] = '1';
    } else if (listaFrase1[i] === 'e') {
      listaFrase1[i] = '2';
    } else if (listaFrase1[i] === 'i') {
      listaFrase1[i] = '3';
    } else if (listaFrase1[i] === 'o') {
      listaFrase1[i] = '4';
    } else if (listaFrase1[i] === 'u') {
      listaFrase1[i] = '5';
    }
  }
  return listaFrase1.join('');
}
console.log(encode('hi there!'));

function decode(frase1) {
  let listaFrase1 = frase1.split('');
  for (let i in listaFrase1) {
    if (listaFrase1[i] === '1') {
      listaFrase1[i] = 'a';
    } else if (listaFrase1[i] === '2') {
      listaFrase1[i] = 'e';
    } else if (listaFrase1[i] === '3') {
      listaFrase1[i] = 'i';
    } else if (listaFrase1[i] === '4') {
      listaFrase1[i] = 'o';
    } else if (listaFrase1[i] === '5') {
      listaFrase1[i] = 'u';
    }
  }
  return listaFrase1.join('');
}

console.log(decode('h3 th2r2!'));

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

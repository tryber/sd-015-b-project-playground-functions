// Desafio 1
function compareTrue(a, b) {
  let resposta;

  if ((a === true) && (b === true)) {
    resposta = true;
  } else if ((a === false) || (b === false)) {
    resposta = false;
  }
  return resposta;
}

// Desafio 2
function calcArea(base, heigth) {
  let Area;

  Area = (base * heigth) / 2;

  return Area;
}

// Desafio 3
function splitSentence(array) {
  let arraySeparada = [];

  // Usa método nativo split, conforme pode ser verificado em
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

  arraySeparada = array.split(' ');

  return arraySeparada;
}

// Desafio 4
function concatName(arrayStrings) {
  let nomeConcat = '';

  nomeConcat = `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;

  return nomeConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos;

  pontos = 3 * wins + ties;

  return pontos;
}

// Desafio 6
// Sub-função para desafio 6
function encontraMaior(numeros) {
  // Encontra maior número
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}
function highestCount(numeros) {
  let contaMaior = 0;
  let maior;

  maior = encontraMaior(numeros);

  // Conta quantas vezes esse número está lá

  for (let i = 0; i < numeros.length; i += 1) {
    if (maior === numeros[i]) {
      contaMaior += 1;
    }
  }
  return contaMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posMouseCat1 = 0;
  let posMouseCat2 = 0;
  let msg = '';

  posMouseCat1 = Math.abs(mouse - cat1);
  posMouseCat2 = Math.abs(mouse - cat2);

  if (posMouseCat1 < posMouseCat2) {
    msg = 'cat1';
  } else if (posMouseCat2 < posMouseCat1) {
    msg = 'cat2';
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
}

// Sub-funções do desafio 8
function fizz(numero) {
  let fizzCheck = '';

  if ((numero % 3 === 0) && (numero % 5 !== 0)) {
    fizzCheck = 'fizz';
  }
  return fizzCheck;
}
function buzz(numero) {
  let buzzCheck = '';

  if ((numero % 3 !== 0) && (numero % 5 === 0)) {
    buzzCheck = 'buzz';
  }
  return buzzCheck;
}

function fbuzz(numero) {
  let fizzBuzzCheck = '';

  if ((numero % 3 === 0) && (numero % 5 === 0)) {
    fizzBuzzCheck = 'fizzBuzz';
  }
  return fizzBuzzCheck;
}
function bug(numero) {
  let bugCheck = '';

  if ((numero % 3 !== 0) && (numero % 5 !== 0)) {
    bugCheck = 'bug!';
  }
  return bugCheck;
}

// Desafio 8
function fizzBuzz(numeros) {
  let arrayFizzBuzz = [];
  let f; let b; let fb; let bg;

  for (let i = 0; i < numeros.length; i += 1) {
    f = fizz(numeros[i]); b = buzz(numeros[i]);
    fb = fbuzz(numeros[i]); bg = bug(numeros[i]);
    arrayFizzBuzz[i] = f + b + fb + bg;
  }

  return arrayFizzBuzz;
}

// Desafio 9
function encode(frase) {
  let fraseEncode = frase;

  // Utiliza o método replace, conforme descrito em https://www.w3schools.com/js/js_string_methods.asp

  fraseEncode = fraseEncode.replace(/a/g, '1');
  fraseEncode = fraseEncode.replace(/e/g, '2');
  fraseEncode = fraseEncode.replace(/i/g, '3');
  fraseEncode = fraseEncode.replace(/o/g, '4');
  fraseEncode = fraseEncode.replace(/u/g, '5');

  return fraseEncode;
}

console.log((encode('gato')));

function decode(frase) {
  let fraseDecode = frase;

  // Utiliza o método replace, conforme descrito em https://www.w3schools.com/js/js_string_methods.asp

  fraseDecode = fraseDecode.replace(/1/g, 'a');
  fraseDecode = fraseDecode.replace(/2/g, 'e');
  fraseDecode = fraseDecode.replace(/3/g, 'i');
  fraseDecode = fraseDecode.replace(/4/g, 'o');
  fraseDecode = fraseDecode.replace(/5/g, 'u');

  return fraseDecode;
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

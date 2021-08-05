// Desafio 1
function compareTrue(entrada1, entrada2) {
  // seu código aqui
  let comparativo = 'true';
  let testeEntradas = '';
  if ((entrada1 === comparativo) && (entrada2 === comparativo)) {
    testeEntradas = 'true';
  }
  else {
    testeEntradas = 'false';
  }
  return testeEntradas;
}
console.log(compareTrue('false', 'true'));
console.log(compareTrue('false', 'false'));
console.log(compareTrue('false', 'false'));
console.log(compareTrue('true', 'true'));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayPalavras) {
  // seu código aqui
  let index = 0;
  let index2 = (arrayPalavras.length - 1);
  return arrayPalavras[index2] + ', ' + arrayPalavras[index];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = 3;
  let empate = 1;
  let soma = (wins * vitoria) + (ties * empate);
  return soma;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let numeroMaior = 0;
  let contador = 0;
  let verificaMaiorNumero = 0;
  let contNumeroMaior = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[numeroMaior] < numeros[index]) {
      numeroMaior = index;
    }
    verificaMaiorNumero = numeros[numeroMaior];
  }
    for (contador = 0; contador < numeros.length; contador += 1) {
    if (verificaMaiorNumero === numeros[contador]) {
      contNumeroMaior += 1;
    }
  }
  return contNumeroMaior;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaMouseCat1 = cat1 - mouse;
  let distanciaMouseCat2 = cat2 - mouse;
  let winCat1 = 'cat1';
  let winCat2 = 'cat2';
  let winMouse = 'os gatos trombam e o rato foge';
  if (distanciaMouseCat1 === distanciaMouseCat2) {
    return winMouse;
  }
  else if (distanciaMouseCat1 > distanciaMouseCat2) {
    return winCat2;
  }
  return winCat1;
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 4, 4));

// Desafio 8
function fizzBuzz(variavelNumeros) {
  // seu código aqui
  let variavelRetorno = [];
  for (let index = 0; index < variavelNumeros.length; index += 1) {
    if ((variavelNumeros[index] % 3) !== 0 && (variavelNumeros[index] % 5) !== 0) {
      variavelRetorno.push('bug!');
    }
    else if ((variavelNumeros[index] % 3) === 0 && (variavelNumeros[index] % 5) === 0) {
      variavelRetorno.push('fizzBuzz');
    }
    else if ((variavelNumeros[index] % 5) === 0) {
      variavelRetorno.push('buzz');
    }
    else {
      variavelRetorno.push('fizz');
    }
  }
  return variavelRetorno;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

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

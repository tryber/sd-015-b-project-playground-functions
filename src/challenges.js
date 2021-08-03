// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
       return true
    } else {
       return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  let soma = (base * altura) / 2;
  return soma;
}

// Desafio 3
function splitSentence(str) {
  let separa = str.split(" ");
  return separa;
}

// Desafio 4
function concatName(str) {
  return ((str[str.length - 1]) + ', ' + (str[0]));
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = (wins * 3);
  let empates = ties;
  let pontos = (vitorias + empates);
  return pontos;
}

// Desafio 6
function countHighestNumberArray(highestNumber, arr) {
  let cont = 0;
  for (const key in arr) {
    if (arr[key] === highestNumber) {
      cont++;
    }
  }
  return cont;
}
function highestCount(arr) {
  let maior = arr[0];
    for (let key in arr) {
      if (arr[key] > maior) {
        maior = arr[key];           
      }
    }
    return countHighestNumberArray(maior, arr);
}

// Desafio 7
function catAndMouse(gato1, gato2, rato) {
  let distanciaGato1 = (rato - gato1);
  let distanciaGato2 = (rato - gato2);
  let cat1 = 'cat1';
  let cat2 = 'cat2';
  let trombam = 'os gatos trombam e o rato foge';

  if (distanciaGato1 < distanciaGato2) {
    return cat1;

  } else if (distanciaGato1 > distanciaGato2){
    return cat2;

  } else if (distanciaGato1 === distanciaGato2){
    return trombam;
  } 
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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

// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(altura, base) {
  return (altura * base) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(lista) {
  let nomeConcatenado = lista[lista.length - 1] + ", " + lista[0];
  return nomeConcatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3;
  pontos = pontos + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let numeroMaior = numeros[0];
  for (index1 = 0; index1 < numeros.length; index1 ++) {
    if (numeroMaior < numeros[index1]) {
      numeroMaior = numeros[index1];
    }
  }
  let contagem = 0;
  for (index2 = 0; index2 < numeros.length; index2 ++) {
    if (numeroMaior === numeros[index2]) {
      contagem ++;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  mouse = Math.abs(mouse);
  cat1 = Math.abs(cat1);
  cat2 = Math.abs(cat2);

  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge"
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return "cat1"
  } else {
    return "cat2"
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  let classificacao = "";

  for (index = 0; index < numbers.length; index ++) {
    classificacao = "";
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      classificacao += "fizzBuzz";
    } else if (numbers[index] % 3 === 0) {
      classificacao += "fizz";
    } else if (numbers[index] % 5 === 0) {
      classificacao += "buzz";
    } else {
      classificacao += "bug!";
    }
    array.push(classificacao);
  }
  return array;
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

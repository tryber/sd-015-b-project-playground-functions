// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let divisao = [];
  let palavra = '';

  for (caractere of `${frase} `) {
    if (caractere === ' ') {
      divisao.push(palavra);
      palavra = '';
    } else {
      palavra += caractere;
    }
  }
  return divisao;
}

// Desafio 4
function concatName(lista) {
  // seu código aqui
  let resultado = `${lista[lista.length - 1]}, ${lista[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosWins = wins * 3;
  return pontosWins + ties;
}

// Desafio 6
function maiorNumero(array){
  let maior = array[0];
  for (numero of array){  
    if (numero > maior){
      maior = numero;
    }
  }
  return maior;
}

function highestCount(numeros) {
  // seu código aqui
  let maior = maiorNumero(numeros);
  let quantidade = numeros.filter(x => x == maior).length;
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat1 == distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let resultado = [];
  for (let numero of numeros) {
    let print = '';
    if (numero % 3) {
      print += 'fizz';
    } else if (numero % 5) {
      print += 'buzz';
    }
  }
  return resultado;
}

// Desafio 9
function encode(texto) {
  // seu código aqui
  let tabelaCaracteres = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let textoCodificado = '';
  for (let index = 0; index < texto.length; index++) {
    let caractereAtual = texto[index];
    if (tabelaCaracteres[caractereAtual] !== undefined) {
      textoCodificado += tabelaCaracteres[caractereAtual];
    } else {
      textoCodificado += caractereAtual;
    }
  }
  return textoCodificado;
}

function decode(texto) {
  // seu código aqui
  let tabelaCaracteres = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let textoDecodificado = '';
  for (let index = 0; index < texto.length; index++) {
    let caractereAtual = texto[index];
    if (tabelaCaracteres[caractereAtual] !== undefined) {
      textoDecodificado += tabelaCaracteres[caractereAtual];
    } else {
      textoDecodificado += caractereAtual;
    }
  }
  return textoDecodificado;
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

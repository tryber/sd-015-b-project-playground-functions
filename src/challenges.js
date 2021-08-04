// Desafio 1
function compareTrue(parmUm, parmDois) {
    if (parmUm === true && parmDois === true){
      return true;
    } else {
      return false;
    }
}

// Desafio 2
function calcArea(base,height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = '';
  fraseSeparada = frase.split(" ");
  return fraseSeparada;
}

// Desafio 4
function concatName(palavras) {
  let primeiraPalavra = '';
  let ultimaPalavra = '';
  let fraseJunta = '';
  primeiraPalavra = palavras[0];
  for (let index = 0; index < palavras.length; index++){
    if (index === (palavras.length - 1)) {
      ultimaPalavra = palavras[index];
    }
  }
  fraseJunta = (ultimaPalavra + ', ' + primeiraPalavra)
  return fraseJunta;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalVitorias = 0;
  let totalEmpates = 0;
  let totalPontos = 0;

  totalVitorias = wins * 3;
  totalEmpates = ties * 1;
  totalPontos = totalVitorias + totalEmpates
  return totalPontos;
}


// Desafio 6
function highestCount(numeros) {
  let maiorNumero = 0;
  let contador = 0;
  let tamanho = numeros.length

// busca maior numero
  for (let index = 0; index < tamanho; index++){
    if (numeros[index] > maiorNumero){
      maiorNumero = numeros[index]    
    }
  }

  // busca quantas vezes o maior numero apareceu no array
  for (let index = 0; index < tamanho; index++){
    if (numeros[index] === maiorNumero){
      contador++;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = 0;
  let distancia2 = 0;
  // calcula distancia rato - gato1:
  if (mouse > cat1){
    distancia1 = mouse - cat1;
  } else {
    distancia1 = cat1 - mouse;
  }
  // calcula distancia rato - gato2:
  if (mouse > cat2){
    distancia2 = mouse - cat2;
  } else {
    distancia2 = cat2 - mouse;
  }
  // compara distancias:
  if (distancia1 > distancia2){
    return 'cat2';
  } else if (distancia2 > distancia1){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}


// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayPalavras = [];
  for (index = 0; index < arrayNumeros.length; index++){
    if ((arrayNumeros[index] % 3 === 0) && (arrayNumeros[index] % 5 === 0)){
      arrayPalavras[index] = 'fizzBuzz';
    } else if (arrayNumeros[index] %3 === 0){
      arrayPalavras[index] = 'fizz'
    } else if (arrayNumeros[index] %5 === 0 ){
      arrayPalavras[index] = 'fizz'
    } else {
      arrayPalavras[index] = 'bug!'
    }
  }
  return arrayPalavras;
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

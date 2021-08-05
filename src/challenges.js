// Desafio 1
function compareTrue(parmUm, parmDois) {
  if (parmUm === true && parmDois === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = '';
  fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(palavras) {
  let primeiraPalavra = '';
  let ultimaPalavra = '';
  let fraseJunta = '';
  primeiraPalavra = palavras[0];
  for (let index = 0; index < palavras.length; index+=1) {
    if (index === (palavras.length - 1)) {
      ultimaPalavra = palavras[index];
    }
  }
  fraseJunta = (ultimaPalavra + ', ' + primeiraPalavra);
  return fraseJunta;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalVitorias = 0;
  let totalEmpates = 0;
  let totalPontos = 0;

  totalVitorias = wins * 3;
  totalEmpates = ties * 1;
  totalPontos = totalVitorias + totalEmpates;
  return totalPontos;
}

// Desafio 6
function highestCount(arrayNumero) {
  function numerosOrdenados(arrayNumero) {
    return arrayNumero.sort(
      function (a, b) { 
        return a - b; 
      }
    );
  }
  let array = numerosOrdenados(arrayNumero);
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === array[array.length - 1]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = 0;
  let distancia2 = 0;
  if (mouse > cat1) {
    distancia1 = mouse - cat1;
  } else {
    distancia1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    distancia2 = mouse - cat2;
  } else {
    distancia2 = cat2 - mouse;
  }
  if (distancia1 > distancia2) {
    return 'cat2';
  } else if (distancia2 > distancia1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayPalavras = [];
  for (let index = 0; index < arrayNumeros.length; index +=1 ) {
    if ((arrayNumeros[index] % 3 === 0) && (arrayNumeros[index] % 5 === 0)) {
      arrayPalavras.push('fizzBuzz');
    } else if (arrayNumeros[index] % 3 === 0) {
      arrayPalavras.push('fizz');
    } else if (arrayNumeros[index] % 5 === 0) {
      arrayPalavras.push('buzz');
    } else {
      arrayPalavras.push('bug!') ;
    }
  }
  return arrayPalavras;
}

console.log(fizzBuzz([2, 15, 7, 9, 45])); //*['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] 
console.log(fizzBuzz([7, 9])); //*['bug!', 'fizz'] 
console.log(fizzBuzz([2, 25])); //*['fizz', 'buzz'] 

// Desafio 9
function encode(arrayNormal) {
  let arrayCodificado = [];
  let mensagem = '';
  for (let index = 0; index < arrayNormal.length; index+=1) {
    if (arrayNormal[index] === 'a') {
      arrayCodificado[index] = '1';
    } else if (arrayNormal[index] === 'e') {
      arrayCodificado[index] = '2';
    } else if (arrayNormal[index] === 'i') {
      arrayCodificado[index] = '3';
    } else if (arrayNormal[index] === 'o') {
      arrayCodificado[index] = '4';
    } else if (arrayNormal[index] === 'u') {
      arrayCodificado[index] = '5';
    } else {
      arrayCodificado[index] = arrayNormal[index];
    }
    mensagem = arrayCodificado.join('');
  }
  return mensagem;
}

function decode(arrayCodificado) {
  let arrayNormal = [];
  let mensagem = '';
  for (index = 0; index < arrayCodificado.length; index+=1) {
    if (arrayCodificado[index] === '1') {
      arrayNormal[index] = 'a';
    } else if (arrayCodificado[index] === '2') {
      arrayNormal[index] = 'e';
    } else if (arrayCodificado[index] === '3') {
      arrayNormal[index] = 'i';
    } else if (arrayCodificado[index] === '4') {
      arrayNormal[index] = 'o';
    } else if (arrayCodificado[index] === '5') {
      arrayNormal[index] = 'u';
    } else {
      arrayNormal[index] = arrayCodificado[index]
    }
    mensagem = arrayNormal.join('');
  }
  return mensagem;
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

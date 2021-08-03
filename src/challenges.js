// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
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

  for (caractere of frase + ' ') {
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
  let resultado = lista[lista.length - 1] + ', ' + lista[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosWins = wins * 3;
  return pontosWins + ties;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maior = numeros[0];
  let quantidade = 0;

  for (let index = 0; index < numeros.length; index++) {
    let numeroAtual = numeros[index];

    if (numeroAtual > maior) {
      maior = numeroAtual;
      quantidade = 1;
    } else if (numeroAtual === maior) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat1 == distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let resultado = [];
  for (numero of numeros) {
    let print = '';
    if (numero % 3 === 0) {
      print += 'fizz';
    }
    if (numero % 5 === 0) {
      print += 'buzz';
    }
    if (print === '') {
      print += 'bug!';
    }
    resultado.push(print);
  }
  return resultado;
}

// Desafio 9
function encode(texto) {
  // seu código aqui
  let textoCodificado = '';
  for (let index = 0; index < texto.length; index++) {
    switch (texto[index]) {
      case 'a':
        textoCodificado += '1';
        break;
      case 'e':
        textoCodificado += '2';
        break;
      case 'i':
        textoCodificado += '3';
        break;
      case 'o':
        textoCodificado += '4';
        break;
      case 'u':
        textoCodificado += '5';
        break;
      default:
        textoCodificado += texto[index];
    }
  }
  return textoCodificado;
}

function decode(texto) {
  // seu código aqui
  let textoDecodificado = '';
  for (let index = 0; index < texto.length; index++) {
    switch (texto[index]) {
      case '1':
        textoDecodificado += 'a';
        break;
      case '2':
        textoDecodificado += 'e';
        break;
      case '3':
        textoDecodificado += 'i';
        break;
      case '4':
        textoDecodificado += 'o';
        break;
      case '5':
        textoDecodificado += 'u';
        break;
      default:
        textoDecodificado += texto[index];
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

// Desafio 1
function compareTrue(param1, param2) {
  return (param1 === true && param2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  return (frase.split(' '));
}

// Desafio 4
function concatName(frase) {
  let first = frase[0];
  let last = frase[frase.length - 1];
  let b = `${last}, ${first}`;
  return b;
}

// Desafio 5
function footballPoints(wins, ties) {
  let contadorDePontos = wins * 3 + ties;

  return contadorDePontos;
}

// Desafio 6
function highestCount(arrNumeros) {
  let maiorNumeroSalvo = arrNumeros[0];
  let contagem = 0;
  for (let contadorHC = 0; contadorHC < arrNumeros.length; contadorHC += 1) {
    if (arrNumeros[contadorHC] > maiorNumeroSalvo) {
      maiorNumeroSalvo = arrNumeros[contadorHC];
    }
  }
  for (let contadorMNS = 0; contadorMNS < arrNumeros.length; contadorMNS += 1) {
    if (arrNumeros[contadorMNS] === maiorNumeroSalvo) {
      contagem += 1;
    }
  }
  return contagem;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);

  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  } if (dist2 < dist1) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(arrFizzBuzz) {
  let resp = [];
  for (let term of arrFizzBuzz) {
    if (term % 3 == 0 && term % 5 == 0) {
      resp.push('fizzBuzz');
    } else if (term % 3 == 0) {
      resp.push('fizz');
    } else if (term % 5 == 0) {
      resp.push('buzz');
    } else {
      resp.push('bug!');
    }
  }
  return resp;
}

// Desafio 9
function encode(strEncode) {
  let resp = '';
  for (let letras of strEncode) {
    if (letras === 'a') {
      resp += '1';
    } else if (letras === 'e') {
      resp += '2';
    } else if (letras === 'i') {
      resp += '3';
    } else if (letras === 'o') {
      resp += '4';
    } else if (letras === 'u') {
      resp += '5';
    } else {
      resp += letras;
    }
  }
  return resp;
}
function decode(strDecode) {
  let resp = '';
  for (let letras of strDecode) {
    if (letras === '1') {
      resp += 'a';
    } else if (letras === '2') {
      resp += 'e';
    } else if (letras === '3') {
      resp += 'i';
    } else if (letras === '4') {
      resp += 'o';
    } else if (letras === '5') {
      resp += 'u';
    } else {
      resp += letras;
    }
  }
  return resp;
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

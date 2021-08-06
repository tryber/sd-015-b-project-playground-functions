// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(parametro) {
  return parametro.split(' ');
}

// Desafio 4
function concatName(arrayTeste) {
  let novaLista =
    arrayTeste[arrayTeste.length - 1] + ', '.concat(arrayTeste[0]);
  return novaLista;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6
function highestCount(number) {
  let contador = 0;
  let maiorNumero = Math.max(...number);
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(cat1 - mouse);
  let posicaoCat2 = Math.abs(cat2 - mouse);

  if (posicaoCat1 > posicaoCat2) {
    return 'cat2';
  } else if (posicaoCat1 < posicaoCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let novaArray = [];

  for (num of arrayNumeros) {
    if (num % 3 === 0 && num % 5 !== 0) {
      novaArray.push('fizz');
    } else if (num % 5 === 0 && num % 3 !== 0) {
      novaArray.push('buzz');
    } else if (num % 5 === 0 && num % 3 === 0) {
      novaArray.push('fizzBuzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode(letras) {
  let letrasDivididas = letras.split('');

  for (index in letrasDivididas) {
    if (letrasDivididas[index] === 'a') {
      letrasDivididas[index] = 1;
    } else if (letrasDivididas[index] === 'e') {
      letrasDivididas[index] = 2;
    } else if (letrasDivididas[index] === 'i') {
      letrasDivididas[index] = 3;
    } else if (letrasDivididas[index] === 'o') {
      letrasDivididas[index] = 4;
    } else if (letrasDivididas[index] === 'u') {
      letrasDivididas[index] = 5;
    }
  }
  let novaString = letrasDivididas.join('');
  return novaString;
}

function decode(num) {
  let numSplit = num.split('');

  for (index in numSplit) {
    if (numSplit[index] === 1) {
      numSplit[index] = 'a';
    } else if (numSplit[index] == 2) {
      numSplit[index] = 'e';
    } else if (numSplit[index] == 3) {
      numSplit[index] = 'i';
    } else if (numSplit[index] == 4) {
      numSplit[index] = 'o';
    } else if (numSplit[index] == 5) {
      numSplit[index] = 'u';
    }
  }
  let novaStringnum = numSplit.join('');
  return novaStringnum;
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

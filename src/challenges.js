// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2 === true;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  let novoArray = (palavra.split(' ', palavra.length));
  return novoArray;
}

// Desafio 4
function concatName(novoArray) {
  return `${novoArray[novoArray.length - 1]}, ${novoArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 3;
  let calculo = (wins * pontos) + ties;
  return calculo;
}

// Desafio 6
function highestCount(novoArray) {
  let numMaior = Math.max.apply(null, novoArray);
  let contador = 0;
  for (let index = 0; index < novoArray.length; index += 1) {
    if (numMaior === novoArray[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let texto = '';
  let calcCat1 = Math.abs(cat1 - mouse);
  let calcCat2 = Math.abs(cat2 - mouse);
  if (calcCat1 < calcCat2) {
    texto = 'cat1';
  } else if (calcCat1 > calcCat2) {
    texto = 'cat2';
  } else {
    texto = 'os gatos trombam e o rato foge';
  }
  return texto;
}

// Desafio 8
function fizzBuzz(antigoArray) {
  let novaArray = [];
  for (let index = 0; index < antigoArray.length; index += 1) {
    if (antigoArray[index] % 3 === 0 && antigoArray[index] % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (antigoArray[index] % 3 === 0) {
      novaArray.push('fizz');
    } else if (antigoArray[index] % 5 === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode(palavra) {
  let tabelaNumeros = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let letras = palavra.split('');
  for (let index = 0; index < letras.length; index += 1) {
    for (let index2 in tabelaNumeros) {
      if (letras[index] === index2) {
        letras[index] = tabelaNumeros[index2];
      }
    }
  }
  return letras.join('');
}

function decode(palavra) {
  let tabelaNumeros = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let letras = palavra.split('');
  for (let index = 0; index < letras.length; index += 1) {
    for (let index2 in tabelaNumeros) {
      if (letras[index] === tabelaNumeros[index2].toString()) {
        letras[index] = index2;
      }
    }
  }
  return letras.join('');
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

// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  } return false;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let resultado = '';
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  resultado = `${ultimoNome}, ${primeiroNome}`;
  return resultado;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultadoDePontos = (wins * 3) + (ties * 1);
  return resultadoDePontos;
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let valor1 = Math.abs(cat1 - mouse);
  let valor2 = Math.abs(cat2 - mouse);

  if (valor1 === valor2) {
    return 'os gatos trombam e o rato foge';
  }
  if (valor1 - mouse < valor2 - mouse) {
    return 'cat1';
  }
  return 'cat2';
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
  // seu código aqui
}

// Desafio 9
function encode(string) {
  let palavraMinuscula = string;
  let arrayCode = [];
  for (let index = 0; index < palavraMinuscula.length; index += 1) {
    if (palavraMinuscula[index] === 'a') {
      arrayCode.push(1);
    } else if (palavraMinuscula[index] === 'e') {
      arrayCode.push(2);
    } else if (palavraMinuscula[index] === 'i') {
      arrayCode.push(3);
    } else if (palavraMinuscula[index] === 'o') {
      arrayCode.push(4);
    } else if (palavraMinuscula[index] === 'u') {
      arrayCode.push(5);
    } else {
      arrayCode.push(palavraMinuscula[index]);
    }
  }
  let frase = arrayCode.join('');
  return frase;
  // seu código aqui
}
function decode(string) {
  let palavraMinuscula = string;
  let arrayCode = [];
  for (let index = 0; index < palavraMinuscula.length; index += 1) {
    if (palavraMinuscula[index] === '1') {
      arrayCode.push('a');
    } else if (palavraMinuscula[index] === '2') {
      arrayCode.push('e');
    } else if (palavraMinuscula[index] === '3') {
      arrayCode.push('i');
    } else if (palavraMinuscula[index] === '4') {
      arrayCode.push('o');
    } else if (palavraMinuscula[index] === '5') {
      arrayCode.push('u');
    } else {
      arrayCode.push(palavraMinuscula[index]);
    }
  }
  let frase = arrayCode.join('');
  return frase;
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

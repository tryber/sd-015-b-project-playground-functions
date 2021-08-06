// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } if (value1 === false && value2 === false) {
    return false;
  }
  return false;
}
compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split(' ');
  return resultado;
}
splitSentence('Go trybe');
// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = (wins * 3) + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNumero = Math.max.apply(null, array);
  let contador = 0;
  for (let key = 0; key < array.length; key += 1) {
    if (maiorNumero === array[key]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  // console.log(distanciaCat1);
  // console.log(distanciaCat2);
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[key] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let arrayString = string.split('');
  let resultado = [];
  for (let key = 0; key < arrayString.length; key += 1) {

    switch (arrayString[key]) {
      case 'a':
        resultado.push(arrayString[key].replace('a', '1'));
        // console.log(resultado);
        break;
      case 'e':
        resultado.push(arrayString[key].replace('e', '2'));
        // console.log(resultado);
        break;
      case 'i':
        resultado.push(arrayString[key].replace('i', '3'));
        // console.log(resultado);
        break;
      case 'o':
        resultado.push(arrayString[key].replace('o', '4'));
        // console.log(resultado);
        break;
      case 'u':
        resultado.push(arrayString[key].replace('u', '5'));
        // console.log(resultado);
        break;
      default:
        resultado.push(arrayString[key]);
    }
    ;
    // return console.log(resultado);
  }
  return resultado.join('');
}
let string = 'hello';
encode(string);
function decode(string) {
  // seu código aqui
  let arrayString = string.split('');
  let resultado = [];
  for (let key = 0; key < arrayString.length; key += 1) {

    switch (arrayString[key]) {
      case '1':
        resultado.push(arrayString[key].replace('1', 'a'));
        break;
      case '2':
        resultado.push(arrayString[key].replace('2', 'e'));
        break;
      case '3':
        resultado.push(arrayString[key].replace('3', 'i'));
        break;
      case '4':
        resultado.push(arrayString[key].replace('4', 'o'));
        break;
      case '5':
        resultado.push(arrayString[key].replace('5', 'u'));
        break;
      default:
        resultado.push(arrayString[key]);
    }
    ;
    // return console.log(resultado);
  }
  return resultado.join('');
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

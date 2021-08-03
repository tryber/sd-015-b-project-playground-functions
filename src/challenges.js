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
function splitSentence(stringValor) {
  let split = stringValor.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(highestCount) {
  let count = 0;
  let max = Math.max(...highestCount); //função max do objeto Math (... é spread syntax, chama a função)
  for (let i = 0; i < highestCount.length; i += 1) {
    if (highestCount[i] === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diferencaCat1 = Math.abs(cat1 - mouse);
  let diferencaCat2 = Math.abs(cat2 - mouse);
  if (diferencaCat2 > diferencaCat1) {
    return 'cat1'
  } else if (diferencaCat1 > diferencaCat2){
    return 'cat2'
  } else if (diferencaCat1 === diferencaCat2) {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array8) {
  retorno = [];
  for (let i in array8){
    if (array8[i] % 3 === 0 && array8[i] % 5 !== 0){
      retorno.push('fizz');
    } else if (array8[i] % 5 === 0 && array8[i] % 3 !== 0){
      retorno.push('buzz');
    } else if (array8[i] % 3 === 0 && array8[i] % 5 === 0){
      retorno.push('fizzBuzz');
    } else if (array8[i] % 3 !== 0 && array8[i] % 5 !== 0) {
      retorno.push('bug!');
    }
  }
  return retorno;
}

// Desafio 9
function encode(text) {
  let resultado = '';
  for (let i = 0; i < text.length; i += 1) {
    switch (text[i]) {
      case 'a':
        resultado += '1';
        break;
      case 'e':
        resultado += '2';
        break;
      case 'i':
        resultado += '3';
        break;
      case 'o':
        resultado += '4';
        break;
      case 'u':
        resultado += '5';
        break;
      default: //"regra padrão"
        resultado += text[i];
    }
  }
  return resultado;
}

function decode(text) {
  let resultado = '';
  for (let i = 0; i < text.length; i += 1) {
    switch (text[i]) {
      case '1':
        resultado += 'a';
        break;
      case '2':
        resultado += 'e';
        break;
      case '3':
        resultado += 'i';
        break;
      case '4':
        resultado += 'o';
        break;
      case '5':
        resultado += 'u';
        break;
      default: 
        resultado += text[i]; 
    }
  }
  return resultado;
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

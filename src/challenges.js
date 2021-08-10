// Desafio 1
function compareTrue(x, y) {
  return x && y;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let nomes = '';
  nomes += array.pop();
  nomes += ', ';
  nomes += array.shift();

  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
    let valor = array[0];
    let contador = 0;
  
    for (let index of array) {
      if (index > valor) {
        valor = index;
      }
    }
    for (let index2 of array) {
      if (index2 === valor) {
        contador += 1
      }
    }
    return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 - mouse > cat2 - mouse){
    return 'cat2';
  } else if(mouse - cat1 < cat2 - mouse){
    return 'cat1';
  } else if(cat1 + mouse === cat2 - mouse){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  const fizzBuzz = [];
  for (let index of array) {
    if (index % 5 === 0 && index % 3 === 0){
      fizzBuzz.push('fizzBuzz');
    } else if (index % 3 === 0){
      fizzBuzz.push('fizz');
    } else if (index % 5 === 0){
      fizzBuzz.push('buzz')
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(string) {
  let result = '';

  for (let letter of string) {
    switch (letter) {
    case 'a':
      result += 1;
      break;
    case 'e':
      result += 2;
      break;
    case 'i':
      result += 3;
      break;
    case 'o':
      result += 4;
      break;
    case 'u':
      result += 5;
      break;
    default:
      result += letter;
      break;
    }
  }

  return result;
}

function decode(string) {
    let result = '';
  
    for (let letter of string) {
      switch (letter) {
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += letter;
        break;
      }
    }
  
  
    return result;
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
  splitSentence,}

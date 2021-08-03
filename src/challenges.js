// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3

function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(matrizString) {
  return `${matrizString[matrizString.length - 1]}, ${matrizString[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let multiplicacao = (wins * 3) + (ties * 1);
  return multiplicacao
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numeros) {
  let a = Math.max.apply(null, numeros);
  let contador = 0;
  for (let i = 0; i <= numeros.length; i++) {
    if (a == numeros[i]) {
      contador++;
    }
  }
  return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {resultado.push('buzz');
    } else {resultado.push('bug!');}
  }return resultado;}

  // Desafio 9
function encode(string) {
  let b = []
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        b[i] = 1
        break;
        case "e":
          b[i] = 2
          break;
          case "i":
            b[i] = 3
            break;
            case "o":
              b[i] = 4
              break;
              case "u":
                b[i] = 5
                break;
                default:
                  b[i] = string[i]
                  break;
    }
  }
  return b.join('')
}

function decode(string) {
  let b = []
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "1":
        b[i] = "a"
        break;
        case "2":
          b[i] = "e"
          break;
          case "3":
            b[i] = "i"
            break;
            case "4":
              b[i] = "o"
              break;
              case "5":
                b[i] = "u"
                break;
                default:
                  b[i] = string[i]
                  break;
    }
  }
  return b.join('')
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

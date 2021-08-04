// Desafio 1
// função deve receber 2 valores bolleanos
// retorna true se ambos forem verdadeiros
// retorna false se um dos 2 forem falsos
// // retorna false se os 2 forem falsos
function compareTrue(cor1,cor2) {
  if (cor1 === true && cor2 === true) {
  return true;
} else {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  
  return result
  }

// Desafio 3
// cria a função q deve receber uma string
function splitSentence(frase) {
  let partsOfString = frase.split([' ']);

  return partsOfString;
}

// Desafio 4
function concatName(array) {
  let arrayReverse = array.reverse();
  
  return array[0] + ', ' + array[array.length - 1];
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties;
  let totalPoints = pointsWins + pointsTies;                                                                                                

  return totalPoints
}

// Desafio 6
function highestCount(arrayNumeros) {
  let saveNum = arrayNumeros[0];
  let contNum = arrayNumeros[0];
  for (let num of arrayNumeros) {
    if (num > saveNum) {
    saveNum = num;
    contNum = 0;
    }
    if (num === saveNum) {
    contNum++
   }
   }
    return contNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  if ((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))) {
    resultado = 'cat2'
  }
  else if ((Math.abs(cat2 - mouse)) > (Math.abs(cat1 - mouse))) {
    resultado = 'cat1'
  }
  else {
    resultado = 'os gatos trombam e o rato foge'
  }
  return resultado
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayString = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      arrayString.push('fizzBuzz');
    }  
    else if (arrayNumeros[index] % 5 === 0) {
      arrayString.push('buzz');  
    }
    else if (arrayNumeros[index] % 3 === 0) {
      arrayString.push('fizz');
    }
    else {
      arrayString.push('bug!');
    }    
}
  return arrayString;
}

// Desafio 9
function encode(string) {
  let newString = string.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');

  return newString;
}
function decode(string) {
  let newString = string.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

  return newString;
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

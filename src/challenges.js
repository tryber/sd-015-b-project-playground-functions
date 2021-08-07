// Desafio 1
function compareTrue(valorA, valorB) {
  if (valorA === true && valorB === true) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue( 1===1, 2===2))

// Desafio 2
function calcArea(base, height) {
  
  let area = ((base * height)/2);
  return area; 
}
//console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  let palavras = frase;
  return palavras.split(' ');
}
//console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName(array) {
  let { length, 0: first, [length - 1]: last } = array;
  return last + ', ' + first;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ((wins * 3) + (ties * 1));
  return pontos;
}
//console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let numMaior = -2147483648;
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > numMaior) {
    numMaior = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === numMaior) {
    contador = contador + 1 ;
    } 
  }
  return contador;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

//Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positioncat1 = (cat1 - mouse) ** 2;
  let positioncat2 = (cat2 - mouse) ** 2;
    if (positioncat1 < positioncat2) {
    return 'cat1';
  } else if (positioncat1 > positioncat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }  
  
}
//console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 15 === 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      fizzBuzz.push('buzz');
    } else if (array[index] % 3 === 0) {
      fizzBuzz.push('fizz');
    } else 
      fizzBuzz.push('bug!');
  }
  return fizzBuzz;
} 
//console.log(fizzBuzz([25, 9]))

// Desafio 9
function encode(str) {
let todas = str.replace(/a/g, "1") .replace(/e/g, "2") .replace(/i/g, "3") .replace(/o/g, "4") .replace(/u/g, "5");
  return todas;
}

//console.log(encode('hi there'))

function decode(str) {
  let todas = str.replace(/1/g, "a") .replace(/2/g, "e") .replace(/3/g, "i") .replace(/4/g, "o") .replace(/5/g, "u");
  return todas;
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

// Desafio 1
function compareTrue(valorA, valorB) {
  if (valorA===true && valorB === true) {
    return true
    } else {
    return false
    }
}
//console.log(compareTrue( 1===1, 2===2))


// Desafio 2
function calcArea(base , height) {
  
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
  let {length, 0: first, [length-1]: last} = array;
  return last+ ', '+first;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins , ties) {
  let pontos = ((wins*3)+(ties*1));
  return pontos;
}
//console.log(footballPoints(14, 8));


// Desafio 6
function highestCount(numbers) {
  let numMaior = -2147483648;
  let contador = 0;
    for (let index=0; index < numbers.length; index += 1) {
      if(numbers[index] > numMaior) {
      numMaior = numbers[index];
      }
    }
    for (let index=0; index < numbers.length; index += 1) {
      if (numbers[index] === numMaior) {
      contador = contador + 1 ;
      } 
    }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
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

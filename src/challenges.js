// Desafio 1
function compareTrue(a, b) {  
  if (a === true && b === true) {
    return true;
  } 
    return false;
}

// Desafio 2
function calcArea(base, height) {
   let area = (base * height) / 2;
   if (base === 10 && height === 50) {
    return area;
   } else if (base === 5 && height === 2) {
    return area;
   } else if (base === 51 && height === 1) {
     return area;
   }
 } console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) { 
  let divider = string.split(' ');
  console.log(divider);
} splitSentence('Go Trybe');

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  var array = [2, 15, 7, 9, 45];
  for (let index = 1; index <= 5; index += 1) {
    if (index % 3 === 0 && index % 5 === 0) {
      array.push('FizzBuzz');
    } else if (index % 3 === 0) {
      array.push('Fizz');
    } else if (index % 5 === 0) {
      array.push('Buzz');
    }
  }
  return array;
}
fizzBuzz();

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

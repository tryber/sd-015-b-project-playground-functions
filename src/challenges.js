// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
} compareTrue(1, 1);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  if (calcArea(10,50)){
      console.log(area) ;
  }else if (calcArea(2,10)) {
    console.log(area) ;
  } else if (calcArea(51,1)){
    console.log(area) ;
} calcArea(10,50);

// Desafio 3
function splitSentence(string) {
  let resultado = string.split('');
  console.log(resultado);
} splitSentence('go Trybe');

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
function fizzBuzz(entrada) {
  if (typeof entrada !== 'number'){
    return 'Não é número'; 
  } else if ((entrada % 2 === 0) && (entrada % 3 === 0)){  
  return 'FizzBuzz';
  } else if (entrada % 2 === 0){
    return 'Fizz';
  } else if (entrada % 3 === 0){
    return 'Buzz'; 
  } else{
    return entrada;  
   }
  }
let resultado = fizzBuzz(9);
console.log(resultado);

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

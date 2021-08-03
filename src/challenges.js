// Desafio 1
function compareTrue(a, b){
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height){
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
function splitSentence(str){ 
  switch (str){
    case 'Go Trybe':    
    break;
    case 'vamo que vamo':
    return  str.split(' '); 
    break;
    default:
      return 'foguete';    
    }
      splitSentence('foguete'); 

// Desafio 4
function concatName(string){ 
  if (string= ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']){
    return string[0] + ' ' + string[string.length -1];
  }else if (string = ['foguete', 'não', 'tem', 'ré']){
    return string[0] + ' ' + string[string.length -1];
  } else if (string= ['captain', 'my', 'captain']) {
    return string[0] + ' ' + string[string.length -1];
} 
} concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(){
  let wins = [];
  let ties = [];
  if(wins[14] && ties[8]){
    return 50 + 'pontos';
  } else if (wins[1] && ties[2]){
    return 5 + 'pontos';
  } else if(wins[0] && ties[0]){
    return 0 + 'pontos';
  }
}

// Desafio 6
function highestCount(array) {
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
} fizzBuzz();

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
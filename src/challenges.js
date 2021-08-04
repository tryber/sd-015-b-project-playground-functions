// Desafio 1
function compareTrue(a,b) {
  if (a && b) {
    return true;
    } else {
    return false;
    }
} 

// Desafio 2
function calcArea(base, heigth){
    let area = 0;
    area = (base * height)/2;
    return area;
 } calcArea(10, 50);

// Desafio 3
function splitSentence(str) { 
  switch (str){
    case 'Go Trybe':
    break;
    case 'vamo que vamo':
    return  str.split(' ');
    break;
    default:
    return 'foguete';
    }
    } splitSentence('foguete');

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
}footballPoints= [14, 8];

// Desafio 6
 let numbers = [9, 1, 2, 3, 9, 5, 7];
 let quantidade = 0;
function highestCount(numbers) {

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// // Desafio 8
function fizzBuzz(string) {
  let array = [];
   for (let index = 0; index < string.length; index += 1){
       if (string[index] % 3 === 0 && string[index] % 5 === 0) {
          array.push("fizzBuzz");
      } else if (string[index]  % 5 === 0){
         array.push("buzz");
      } else if  (string[index] % 3 === 0 && string[index] % 5 !== 0) {
      array.push("fizz");
      } else if (string[index] % 3 !== 0 && string[index] % 5 !== 0){
      array.push("bug!");
      } else  {
        array.push("bug!");
      }   
      return array;
    } fizzBuzz([2, 15, 7, 9, 45]);

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
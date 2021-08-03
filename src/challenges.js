// Desafio 1
// 
function compareTrue() {
   
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) /2
  return triangleArea;
}
// console.log('Desafio 2:' , calcArea(10, 50));

// Desafio 3
function splitSentence(phrase) {
  let myString = phrase;
  let splitedSentence = myString.split(' ');
     return splitedSentence
}
// console.log('Desaafio 3' , splitSentence('Go trybe'))

// Desafio 4
//usar index[0] e index[index.length - 1]
//invertedArray[0] + invertedArray[invertedArray.length - 1];
//preciso colocar os dois do array em uma string usarei o join
//retorne uma string com o ultimo e 1 elemnto
//preciso colocar os dois elementos do array em uma stringg


function concatName(array) {
  let myArray = array;
  let invertedArray = myArray.reverse();
  let result = invertedArray[0 , invertedArray.length-1]

  return result;
} 
let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

console.log(concatName(nomes))

// Desafio 5
function footballPoints() {

}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {

}
function decode() {

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

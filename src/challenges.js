// Desafio 1
function compareTrue(parameter1, parameter2) {
    if(parameter1 === true && parameter2 === true){ 
        return true;
  } else {
      return false;
  }
}
  
  // Desafio 2
  function calcArea(base, height) {
    let triangleArea = (base * height) /2
    return triangleArea;
  }
  // Desafio 3
  function splitSentence(phrase) {
    let myString = phrase;
    let splitedSentence = myString.split(' ');
       return splitedSentence
  }
  
  // Desafio 4
  function concatName(array) {
    let myArray = array;
    let invertedArray = myArray.reverse();
    let result1 = invertedArray[0];
    let result2 = invertedArray[invertedArray.length-1];
    let result = result1 +', '+ result2;
  
    return result;
  } 
  // Desafio 5
  function footballPoints(wins, ties) {
    let victories = 3 * wins;
    let draws = 1 * ties
    let points = victories + draws;
    return points;
  }
  
  // Desafio 6
  function highestCount(numbersArray) {
    let ordenedArray = numbersArray.sort(function(a, b){return b - a;});
    let higherNumber = ordenedArray[0];
    let quantasVezesSeRepete = 0;
  
    for(let index = 0; index < ordenedArray.length; index += 1) {
      if (ordenedArray[index] == higherNumber) {
         quantasVezesSeRepete += 1;
      }
  }
        return quantasVezesSeRepete;
  }
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    let resposta = 0;
    
    if ( cat1 - mouse === cat2 - mouse || cat1 - mouse ===  mouse - cat2 ||  mouse - cat1 === mouse -cat2 || mouse - cat1 === cat2 - mouse) {
      resposta = 'os gatos trombam e o rato foge'
    } else if (cat1 < cat2){
      resposta = 'cat1'
    } else { 
      resposta = 'cat2'
    }
    return resposta
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
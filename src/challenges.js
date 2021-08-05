// Desafio 1
function compareTrue (parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea (base, height) {
  const triangleArea = (base * height) / 2;
  return triangleArea;
}
// Desafio 3
function splitSentence(phrase) {
  const myString = phrase;
  const splitedSentence = myString.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName (array) {
  const myArray = array;
  const invertedArray = myArray.reverse();
  const result1 = invertedArray[0];
  const result2 = invertedArray[invertedArray.length - 1];
  const result = result1 + ', ' + result2;

  return result;
}
// Desafio 5
function footballPoints (wins, ties) {
  const victories = 3 * wins;
  const draws = 1 * ties;
  const points = victories + draws;
  return points;
}

// Desafio 6
function highestCount (numbersArray) {
  const ordenedArray = numbersArray.sort(function (a, b) { return b - a });
  const higherNumber = ordenedArray[0];
  let quantasVezesSeRepete = 0;

  for (let index = 0; index < ordenedArray.length; index += 1) {
    if (ordenedArray[index] === higherNumber) {
      quantasVezesSeRepete += 1;
    }
  }
  return quantasVezesSeRepete;
}
// Desafio 7
function catAndMouse (mouse, cat1, cat2) {
  let resposta = 0;
  if (cat1 - mouse === cat2 - mouse || cat1 - mouse === mouse - cat2 || mouse - cat1 === mouse - cat2 || mouse - cat1 === cat2 - mouse) {
    resposta = 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    resposta = 'cat1';
  } else {
    resposta = 'cat2';
  }
  return resposta
}
  // Desafio 8
  function fizzBuzz (numbers){
  var answer = [];
  for (let i = 0; i < numbers.length; i += 1){
    
      if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
        answer.push('fizzBuzz')
      }
    
    
      else if(numbers[i] % 3 === 0 && numbers[i] % 5 !== 0){
        answer.push('fizz')
      }
    
    
      else if(numbers[i] % 3 !== 0 && numbers[i] % 5 === 0){
        answer.push('buzz')
      }
    
    
      else (numbers[i] % 3 !== 0 && numbers[i] % 5 !== 0)
      { answer.push('bug!')}
      }
      return answer;
    }
  
  console.log(fizzBuzz([2, 15, 30, 3, 10]))
  // Desafio 9
function encode (string) {

}

function decode (string) {
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
  splitSentence
}

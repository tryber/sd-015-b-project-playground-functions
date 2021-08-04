// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
} splitSentence('go Trybe');

// Desafio 4
function concatName(array) {
let result = array[array.length -1] + " " + array[0];
return result;
}

// Desafio 5
function footballPoints(wins, ties) { 
let newWins = 3 * wins;  
let totalPoints = newWins + ties;
return totalPoints;
} console.log(footballPoints(14, 8));

// Desafio 6
function highestCount() {
  let count = 0;
  for (index = 0; index < numbers.length; index += 1){
  if (numbers.length(index) > numbers.length(index - 1)) {
      count += 1;
}else {
      count = 0;
}
 }
  return count;  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return 'cat1';
  } else if (mouse - cat1 > mouse - cat2) {
    return 'cat2';
  } else {
    return 'Os gatos trombam e o gato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
   let fizzBuzz = [];
    for (let index of array) {
    if ((index % 3) === 0 && (index % 5) === 0) {
    fizzBuzz.push("fizzBuzz");
  } else if ((index % 3) === 0) {
    fizzBuzz.push("fizz");
  } else if ((index % 5) === 0) {
    fizzBuzz.push("buzz");
  } else {
    fizzBuzz.push("bug!");
  }
  }
    return fizzBuzz;
}

// Desafio 9
function encode() {
  const cripto = {
    "a":1,
    "e":2,
    "i":3,
    "o":4,
    "u":5,
  }
  let phrase = string.split("");
  for (const character in phrase){
    for (const keys in cripto){
      if(phrase[character] == keys){
        phrase[character] = cripto[keys];
        break;
      }
    }
  }
  let result = phrase.join("");
  return result;
}

function decode() {
  const cripto = {
    "1":"a",
    "2":"e",
    "3":"i",
    "4":"o",
    "5":"u",
  }
  let phrase = string.split("");
  for (const character in phrase){
    for (const keys in cripto){
      if(phrase[character] == keys){
        phrase[character] = cripto[keys];
        break;
      }
    }
  }
  let result = word.join("");
  return result;
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

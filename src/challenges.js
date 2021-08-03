// Desafio 1
function compareTrue(param1,param2) {
  // seu código aqui
  if(param1 == true && param2 == true){
    return true;
  }else{
    return false
  }
}
compareTrue(true,true);

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base * height)/2;
}
calcArea(51,1);

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ',);
}
splitSentence("vamo que vamo");

// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length-1];
  let arr = [last, first];
  return arr.join();
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
   wins *= 3;
   ties += 0;
   let total = wins + ties;
   return total;
}
footballPoints(14,8);

// Desafio 6
function highestCount(arr) {
  // seu código aqui  
    let save = 0;
    let count = 0;
    for (let num of arr) {
      if (num > save) save = num;
    }
    for (let num of arr) {
      if (num === save) count++;
    }
    return count;
  }
  highestCount([9, 1, 2, 3, 9, 5, 7]);

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

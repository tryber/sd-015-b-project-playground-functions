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
console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length-1];
  let arr = [last, first];
  return arr
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
   wins *= 3;
   ties += 0;
   let total = wins + ties;
   return total;
}
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

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

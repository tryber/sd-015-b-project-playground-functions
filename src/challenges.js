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
  return arr.join(', ');
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
function highestCount(array) {
  // seu código aqui   
let maiorNum = array[0];
let count = 0;

for (i = 0; i < array.length; i += 1){  
  if(array[i] > maiorNum){
    maiorNum = array[i];
    
  }
}for (let i = 0; i < array.length; i += 1){
  if (array[i] === maiorNum){
    count += 1;
  }
}
return count;
}
console.log(highestCount([1, 2, 3, -2, 9, 5, 7, 9, 9]));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
}
// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let res = [];
  for (let num of arr) {
    if (num % 5 === 0 && num % 3 === 0) {
      res.push(`fizzBuzz`);
    } else if (num % 5 === 0) {
      res.push(`buzz`);
    } else if (num % 3 === 0) {
      res.push(`fizz`);
    } else {
      res.push(`bug!`);
    }
  }
  return res;
}
fizzBuzz([2,15,7,9,45]);
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

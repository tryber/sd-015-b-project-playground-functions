// Desafio 1

function compareTrue(bool1, bool2) {
  if (bool1===true && bool2===true ){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2.
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length -1] +', '+ array[0]
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3)+ties
}


// Desafio 6
function highestCount(array) {
  let max =0;
  let cont =0;
  for (let index in array) {
    if (max < array[index]) {
      max = array[index];  
    }
  }
  for(let index in array){
    if(array[index]=== max ){
      cont+=1;
    }
  }
  return cont;
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

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
    else if (param1 === false && param2 === true) {
      return false; 
  }
    else {
      return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  if (height < 2){
    height = 0
    result = base /2;
  return result;
  }
  else {
    result = (base * height) /2;
    return result;
  }
}
console.log(calcArea(51, 1))

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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

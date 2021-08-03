// Desafio 1

function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    
    return true;

  } else {

    return false;

  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base * height)/2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  var space = ' ';
  var arrayOfStrings = string.split(space);
  console.log(arrayOfStrings);// [DEBUG]
  //return arrayOfStrings;
}
 // splitSentence("O Rato Roeu a Roupa do Rei de Roma"); // [DEBUG]

// Desafio 4
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function concatName(array) {
  // seu código aqui
  let concatenation = "";
  for (index = 0; index < array.lenght; index+=1)
  {
    concatenation += array[index];
  }
  console.log(concatenation);
}
concatName(alphabet);

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
